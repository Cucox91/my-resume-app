import { Form as FormikForm, Formik } from "formik";
import { Button, Divider, Form } from "semantic-ui-react";
import { useUser } from "../../context/useUser";
import * as Yup from "yup";
import { useEffect, useState, useRef } from "react";
import { IUser } from "../../models/IUser";
import { getUserDetails, saveUserDetails } from "../../apis/adminApi";
import { uploadAvatar } from "../../apis/authApi";
import { toast } from "react-toastify";

interface FormValues {
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  latestUpdate: Date | null;
  bioCliche: string;
  bioHonest: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  username: Yup.string().required("Username is Required"),
  email: Yup.string().email("Invalid email address").required("Email is Required"),
  bioCliche: Yup.string().max(1000, "Cliche Bio must be 1000 characters").required("Cliche Bio is Required"),
  bioHonest: Yup.string().max(1000, "Honest Bio must be 1000 characters").required("Honest Bio is Required"),
});

const EditUserDetailsForm: React.FC = () => {
  const { user } = useUser();
  const [userDetails, setUserDetails] = useState<IUser | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user?.username) {
        try {
          const userData = await getUserDetails(user.username);
          setUserDetails(userData);

          if (userData!.avatar) {
            const uint8Array = new Uint8Array(userData!.avatar.data.data);
            const blob = new Blob([uint8Array], { type: userData!.avatar.data.type });
            const imageUrl = URL.createObjectURL(blob);
            setPreviewImage(imageUrl);
          }
        } catch (error) {
          console.error("Failed to fetch user details", error);
        }
      }
    };

    fetchUserDetails();
  }, [user?.username]);

  const initialValues: FormValues = {
    username: user?.username || "",
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    address: userDetails?.address || "",
    phone: userDetails?.phone || "",
    email: userDetails?.email || "",
    latestUpdate: userDetails?.latestUpdate || null,
    bioCliche: userDetails?.bioCliche || "",
    bioHonest: userDetails?.bioHonest || "",
  };

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      await saveUserDetails(values.username, values);
      console.log("Form submitted!");
      toast.success("User Successfully Updated");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Error trying to Upldate the User.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!userDetails) {
    return <div>Loading user details...</div>;
  }

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ handleChange, handleBlur, values, touched, errors, isSubmitting }) => (
          <FormikForm className="ui form">
            <Divider horizontal content="Edit Personal Details" />

            <Form.Input
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && errors.username ? { content: errors.username, pointing: "below" } : null}
              placeholder="Enter your username"
              readOnly
            />
            <Form.Input
              label="Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && errors.address ? { content: errors.address, pointing: "below" } : null}
              placeholder="Enter your address"
            />
            <Form.Group widths="equal">
              <Form.Input
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && errors.firstName ? { content: errors.firstName, pointing: "above" } : null}
                placeholder="Enter your first name"
              />
              <Form.Input
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && errors.lastName ? { content: errors.lastName, pointing: "above" } : null}
                placeholder="Enter your last name"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email ? { content: errors.email, pointing: "below" } : null}
                placeholder="Enter your email"
              />
              <Form.Input
                label="Phone"
                name="phone"
                type="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone ? { content: errors.phone, pointing: "below" } : null}
                placeholder="Enter your phone"
              />
            </Form.Group>
            <Divider horizontal content="Edit Bio Details" style={{ marginTop: "2.0rem" }} />

            <Form.TextArea
              label="Cliche Bio"
              name="bioCliche"
              value={values.bioCliche}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.bioCliche && errors.bioCliche ? { content: errors.bioCliche, pointing: "below" } : null}
              placeholder="Write a cliche version of your bio"
              rows={10}
            />
            <Form.TextArea
              label="Honest Bio"
              name="bioHonest"
              value={values.bioHonest}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.bioHonest && errors.bioHonest ? { content: errors.bioHonest, pointing: "below" } : null}
              placeholder="Write an honest version of your bio"
              rows={10}
            />
            <Button type="submit" primary fluid loading={isSubmitting} disabled={isSubmitting} style={{ marginTop: "1em" }}>
              Save Changes
            </Button>
          </FormikForm>
        )}
      </Formik>
      <Divider horizontal content="Profile Picture" style={{ marginTop: "2rem" }} />

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        {previewImage ? (
          <img src={previewImage} alt="Avatar Preview" style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} />
        ) : (
          <div style={{ width: "150px", height: "150px", backgroundColor: "#ccc", borderRadius: "50%", display: "inline-block" }} />
        )}
      </div>

      <Button type="button" onClick={() => fileInputRef.current?.click()} primary fluid>
        Upload New Photo
      </Button>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          // Preview the selected image
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewImage(reader.result as string);
          };
          reader.readAsDataURL(file);

          // Upload to server
          const formData = new FormData();
          formData.append("avatar", file);
          formData.append("username", user!.username);

          try {
            await uploadAvatar(formData); // 🚀 Create this API call
            console.log("Image uploaded successfully!");
            toast.success("Image uploaded successfully!");
          } catch (error) {
            console.error("Image upload failed", error);
            toast.error("Image Upload Failed");
          }
        }}
      />
    </>
  );
};

export default EditUserDetailsForm;
