// import React, { useState } from "react";
// import "./project4.css";

// function FormValidation() {
//   const [form, setForm] = useState({
//     username: "",
//     aadhaarName: "",
//     email: "",
//     countryCode: "+91",
//     mobile: "",
//     newPassword: "",
//     confirmPassword: "",
//     permanentAddress: "",
//     currentAddress: "",
//     sameAddress: false,
//     photo: null,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "checkbox") {
//       setForm({
//         ...form,
//         [name]: checked,
//         currentAddress: checked ? form.permanentAddress : "",
//       });
//     } else if (type === "file") {
//       setForm({
//         ...form,
//         [name]: files[0],
//       });
//     } else {
//       setForm({
//         ...form,
//         [name]: value,
//         ...(name === "permanentAddress" && form.sameAddress
//           ? { currentAddress: value }
//           : {}),
//       });
//     }
//   };

//   const validate = () => {
//     let newErrors = {};

//     if (!form.username.trim()) {
//       newErrors.username = "Username is required";
//     }

//     if (!form.aadhaarName.trim()) {
//       newErrors.aadhaarName = "Aadhaar Name is required";
//     } else if (
//       form.username.trim().toLowerCase() !==
//       form.aadhaarName.trim().toLowerCase()
//     ) {
//       newErrors.aadhaarName = "Username and Aadhaar Name must be the same";
//     }

//     if (!form.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     if (!form.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(form.mobile)) {
//       newErrors.mobile = "Mobile number must contain exactly 10 digits";
//     }

//     if (!form.newPassword) {
//       newErrors.newPassword = "New password is required";
//     } else if (form.newPassword.length < 6) {
//       newErrors.newPassword =
//         "Password must contain at least 6 characters";
//     }

//     if (!form.confirmPassword) {
//       newErrors.confirmPassword = "Confirm password is required";
//     } else if (form.newPassword !== form.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!form.permanentAddress.trim()) {
//       newErrors.permanentAddress = "Permanent Address is required";
//     }

//     if (!form.currentAddress.trim()) {
//       newErrors.currentAddress = "Current Address is required";
//     }

//     if (!form.photo) {
//       newErrors.photo = "Photo is required";
//     } else if (form.photo.size > 5 * 1024 * 1024) {
//       newErrors.photo = "Photo size must be less than 5 MB";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validate()) {
//       alert("Form submitted successfully!");
//     }
//   };

//   const handleClear = () => {
//     setForm({
//       username: "",
//       aadhaarName: "",
//       email: "",
//       countryCode: "+91",
//       mobile: "",
//       newPassword: "",
//       confirmPassword: "",
//       permanentAddress: "",
//       currentAddress: "",
//       sameAddress: false,
//       photo: null,
//     });

//     setErrors({});
//     document.getElementById("photo").value = "";
//   };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <h1>Registration Form</h1>

//         <form onSubmit={handleSubmit}>

//           {/* Username */}
//           <label>
//             Username <span>*</span>
//           </label>
//           <input
//             type="text"
//             name="username"
//             value={form.username}
//             onChange={handleChange}
//             placeholder="Enter username"
//           />
//           {errors.username && <p className="error">{errors.username}</p>}

//           {/* Aadhaar Name */}
//           <label>
//             Aadhaar Name <span>*</span>
//           </label>
//           <input
//             type="text"
//             name="aadhaarName"
//             value={form.aadhaarName}
//             onChange={handleChange}
//             placeholder="Enter Aadhaar name"
//           />
//           {errors.aadhaarName && (
//             <p className="error">{errors.aadhaarName}</p>
//           )}

//           {/* Email */}
//           <label>
//             Email <span>*</span>
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="example@gmail.com"
//           />
//           {errors.email && <p className="error">{errors.email}</p>}

//           {/* Mobile */}
//           <label>
//             Mobile Number <span>*</span>
//           </label>

//           <div className="mobile-box">
//             <select
//               name="countryCode"
//               value={form.countryCode}
//               onChange={handleChange}
//             >
//               <option value="+91">🇮🇳 +91</option>
//               <option value="+1">🇺🇸 +1</option>
//               <option value="+44">🇬🇧 +44</option>
//               <option value="+61">🇦🇺 +61</option>
//             </select>

//             <input
//               type="text"
//               name="mobile"
//               value={form.mobile}
//               onChange={handleChange}
//               placeholder="Enter 10 digit number"
//               maxLength="10"
//             />
//           </div>

//           {errors.mobile && <p className="error">{errors.mobile}</p>}

//           {/* Password */}
//           <label>
//             New Password <span>*</span>
//           </label>
//           <input
//             type="password"
//             name="newPassword"
//             value={form.newPassword}
//             onChange={handleChange}
//             placeholder="Enter new password"
//           />
//           {errors.newPassword && (
//             <p className="error">{errors.newPassword}</p>
//           )}

//           {/* Confirm Password */}
//           <label>
//             Confirm Password <span>*</span>
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm password"
//           />
//           {errors.confirmPassword && (
//             <p className="error">{errors.confirmPassword}</p>
//           )}

//           {/* Permanent Address */}
//           <label>
//             Permanent Address <span>*</span>
//           </label>
//           <textarea
//             name="permanentAddress"
//             value={form.permanentAddress}
//             onChange={handleChange}
//             placeholder="Enter permanent address"
//           ></textarea>

//           {errors.permanentAddress && (
//             <p className="error">{errors.permanentAddress}</p>
//           )}

//           {/* Same Address Checkbox */}
//           <div className="checkbox">
//             <input
//               type="checkbox"
//               name="sameAddress"
//               checked={form.sameAddress}
//               onChange={handleChange}
//             />
//             <label>Current Address is same as Permanent Address</label>
//           </div>

//           {/* Current Address */}
//           <label>
//             Current Address <span>*</span>
//           </label>
//           <textarea
//             name="currentAddress"
//             value={form.currentAddress}
//             onChange={handleChange}
//             disabled={form.sameAddress}
//             placeholder="Enter current address"
//           ></textarea>

//           {errors.currentAddress && (
//             <p className="error">{errors.currentAddress}</p>
//           )}

//           {/* Photo */}
//           <label>
//             Upload Photo <span>*</span>
//           </label>

//           <input
//             id="photo"
//             type="file"
//             name="photo"
//             accept="image/*"
//             onChange={handleChange}
//           />

//           <small>Maximum photo size: 5 MB</small>

//           {errors.photo && <p className="error">{errors.photo}</p>}

//           {/* Buttons */}
//           <div className="buttons">
//             <button type="submit" className="submit-btn">
//               Submit
//             </button>

//             <button
//               type="button"
//               className="clear-btn"
//               onClick={handleClear}
//             >
//               Clear
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormValidation;



import React, { useState } from "react";
import "./project4.css";

function Project4() {
  const [form, setForm] = useState({
    username: "",
    aadhaarName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    currentAddress: "",
    sameAddress: false,
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
        currentAddress: checked
          ? form.permanentAddress
          : form.currentAddress,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    setErrors({});
    setSuccess("");
  };

  const validate = () => {
    let newErrors = {};

    if (form.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (form.aadhaarName.trim() === "") {
      newErrors.aadhaarName = "Aadhaar Name is required";
    } else if (
      form.username.trim().toLowerCase() !==
      form.aadhaarName.trim().toLowerCase()
    ) {
      newErrors.aadhaarName =
        "Username and Aadhaar Name must be same";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (form.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile =
        "Mobile number must be exactly 10 digits";
    }

    if (form.password === "") {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    if (form.confirmPassword === "") {
      newErrors.confirmPassword =
        "Confirm Password is required";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    if (form.permanentAddress.trim() === "") {
      newErrors.permanentAddress =
        "Permanent Address is required";
    }

    if (
      !form.sameAddress &&
      form.currentAddress.trim() === ""
    ) {
      newErrors.currentAddress =
        "Current Address is required";
    }

    if (!form.photo) {
      newErrors.photo = "Photo is required";
    } else if (form.photo.size > 5 * 1024 * 1024) {
      newErrors.photo =
        "Photo size must not exceed 5 MB";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration Successful!");
    }
  };

  const handleClear = () => {
    setForm({
      username: "",
      aadhaarName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      currentAddress: "",
      sameAddress: false,
      photo: null,
    });

    setErrors({});
    setSuccess("");

    document.getElementById("photo").value = "";
  };

  return (
    <div className="form-container">

      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>
            Username <span className="required">*</span>
          </label>

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          {errors.username && (
            <div className="error">{errors.username}</div>
          )}
        </div>

        <div className="form-group">
          <label>
            Aadhaar Name <span className="required">*</span>
          </label>

          <input
            type="text"
            name="aadhaarName"
            value={form.aadhaarName}
            onChange={handleChange}
            placeholder="Enter Aadhaar name"
          />

          {errors.aadhaarName && (
            <div className="error">
              {errors.aadhaarName}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>
            Email <span className="required">*</span>
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />

          {errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label>
            Mobile Number <span className="required">*</span>
          </label>

          <div className="phone-box">
            <select>
              <option>IN +91</option>
            </select>

            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10 digit number"
              maxLength="10"
            />
          </div>

          {errors.mobile && (
            <div className="error">{errors.mobile}</div>
          )}
        </div>

        <div className="form-group">
          <label>
            New Password <span className="required">*</span>
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />

          {errors.password && (
            <div className="error">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label>
            Confirm Password <span className="required">*</span>
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          {errors.confirmPassword && (
            <div className="error">
              {errors.confirmPassword}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>
            Permanent Address{" "}
            <span className="required">*</span>
          </label>

          <textarea
            name="permanentAddress"
            value={form.permanentAddress}
            onChange={handleChange}
            placeholder="Enter permanent address"
          ></textarea>

          {errors.permanentAddress && (
            <div className="error">
              {errors.permanentAddress}
            </div>
          )}
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="sameAddress"
            checked={form.sameAddress}
            onChange={handleChange}
          />

          <span>
            Current Address is same as Permanent Address
          </span>
        </div>

        <div className="form-group">
          <label>
            Current Address{" "}
            <span className="required">*</span>
          </label>

          <textarea
            name="currentAddress"
            value={form.currentAddress}
            onChange={handleChange}
            placeholder="Enter current address"
            disabled={form.sameAddress}
          ></textarea>

          {errors.currentAddress && (
            <div className="error">
              {errors.currentAddress}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>
            Upload Photo <span className="required">*</span>
          </label>

          <div className="photo-row">
            <input
              id="photo"
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />

            <span className="photo-size">
              Maximum photo size: 5 MB
            </span>
          </div>

          {errors.photo && (
            <div className="error">{errors.photo}</div>
          )}
        </div>

        <div className="buttons">
          <button
            type="submit"
            className="submit-btn"
          >
            Submit
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        {success && (
          <div className="success">
            {success}
          </div>
        )}

      </form>
    </div>
  );
}

export default Project4;