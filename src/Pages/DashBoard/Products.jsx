import React, {
  useActionState,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Container } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "./MenuOptionsStyles.css";
import "../Home/styles.css";
import {
  papStyle,
  prods,
  sampleOrders,
  tableContStyle,
  sampleProducts,
  inpStye,
  productsList,
} from "../Components/utils";
import {
  Autocomplete,
  Button,
  FormControl,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CiMedicalClipboard,
  CiSearch,
  CiBoxes,
  CiTrophy,
  CiDeliveryTruck,
} from "react-icons/ci";

import ProfileCard from "../TS/ProfileCard";
import { Email } from "@mui/icons-material";
// import SingleProd from "./SingleProd";

const Products = (props) => {
  const dispatch = useDispatch();
  const usr = useSelector(({ main }) => main.user);
  const navigation = useNavigate();

  const orderColumns = ["Id", "Name", "In-Stock", "Status", "Price"];

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    hobbies: [],
    country: "",
    bio: "",
    file: null,
  });

  const [products, setProducts] = useState(() =>
    new Array(10000).fill(null).map((_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 5000),
      rating: Math.random() * 5,
      category: ["electronics", "clothing", "books", "home"][i % 4],
      stock: Math.floor(Math.random() * 1000),
    })),
  );

  // const filtered = products
  //   .filter((p) => p.price > 1000)
  //   .sort((a, b) => b.rating - a.rating);

  const filtered = useMemo(() => {
    console.log("Filter Running");
    return products
      .filter((p) => p.price > 1000)
      .sort((a, b) => b.rating - a.rating);
  }, [products]);

  // console.log("Renders");

  useEffect(() => {
    // console.log("userData", usr);
    console.log("products", products);
  }, []);

  // const [formError, formSubmit, isPending] = useActionState(
  //   async (prevState, field) => {
  //     return null;
  //   },
  //   null,
  // );

  // useEffect(() => {
  //   console.log("useActionState : ", { formError, isPending });
  // }, [formError, isPending]);

  const debounce = (fn, delay) => {
    let timer;
    console.log("debounce :", { timer, fn, delay });
    return (...arg) => {
      console.log("debounce return:", { ...arg });

      clearTimeout(timer);
      timer = setTimeout(() => fn(...arg), delay);
    };
  };

  const handleSearch = (e) => {
    console.log("handleSearch :", e.target.value);
  };

  const onSearch = useMemo(() => debounce(handleSearch, 1000), []);
  // const onSearch = debounce(handleSearch, 1000);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("onFormSubmit :", form);
    const i = 1001;
    setProducts((prev) => [
      ...prev,
      {
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 5000),
        rating: Math.random() * 5,
        category: ["electronics", "clothing", "books", "home"][i % 4],
        stock: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    console.log("handleChange : ", { name, value, type, checked, files });
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((v) => v != value),
      }));
    } else if (type === "file") {
      setForm((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // const onSProdClick = () => {
  //   console.log("onSProdClick parent");
  // };
  const onSProdClick = useCallback(() => {
    console.log("onSProdClick parent");
  }, []);

  return (
    <Container fluid className="tabScreens">
      <div className="orderListContent">
        <div className="filterHolder">
          <div className="filterConts">
            <div className="gridTitle">Your Products</div>

            {/* <ProfileCard
              user={{ id: 2, name: 2, age: 22 }}
              onMessage={() => {
                console.log("hello");
              }}
            /> */}

            <div className="filterInps">
              <div
                className="searchBar"
                style={{
                  paddingInline: "8px",
                  gap: "5px",
                  height: "fit-content",
                  flex: 1.5,
                  backgroundColor: "#f6f6f6",
                }}
              >
                <CiSearch size={20} />
                <input
                  className="searchInput"
                  placeholder="Search"
                  style={{ backgroundColor: "#f6f6f6" }}
                  onChange={onSearch}
                />
              </div>

              <FormControl size="small" className="orderFilterSelectHolder">
                <Autocomplete
                  freeSolo
                  options={sampleProducts}
                  size="small"
                  getOptionLabel={(option) =>
                    option.product ? option.product : ""
                  }
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      size="small"
                      fullWidth
                      variant="standard"
                      placeholder="Filter"
                      sx={inpStye}
                    />
                  )}
                  // value={product.name}
                  onInputChange={(e, val) => {
                    console.log("onInputChange : ", val);
                  }}
                  onChange={(e, val) => {
                    console.log("onChange : ", val);
                  }}
                />
              </FormControl>

              <Button
                className="addProductBt"
                variant="outlined"
                size="small"
                onClick={() => navigation("/dashboard/addProduct")}
              >
                Add Product
              </Button>
            </div>
          </div>
        </div>
        <div className="orderListHolder">
          {/* <Paper sx={papStyle}>
            <TableContainer style={tableContStyle}>
              <Table stickyHeader padding="normal" size="small">
                <TableHead>
                  <TableRow>
                    {orderColumns.map((item, ind) => (
                      <TableCell
                        style={{
                          fontSize: "medium",
                          fontWeight: "500",
                          fontFamily: "Lucida Sans Regular",
                          // backgroundColor: "#f6f6f6",
                        }}
                        align="center"
                        key={ind}
                      >
                        {item}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {productsList.map((obj, ind) => (
                    <TableRow hover key={ind}>
                      {Object.keys(productsList[0]).map((key, dex) => (
                        <TableCell align="center" key={dex}>
                          {obj[key]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper> */}

          {/* <SingleProd onClick={onSProdClick} /> */}

          <form
            className="basicForm"
            // actionx={formSubmit}
            //  onSubmit={onFormSubmit}
          >
            <div>
              <label>name</label>
              <input
                name="name"

                //  value={form.name} onChange={handleChange}
              />
            </div>

            <div>
              <label>email</label>
              <input
                name="email"
                type="email"
                // value={form.email}
                // onChange={handleChange}
              />
            </div>

            <div>
              <label>password</label>
              <input
                name="password"
                type="password"
                // value={form.password}
                // onChange={handleChange}
              />
            </div>

            <div>
              <label>age</label>
              <input
                name="age"
                type="number"
                // value={form.age}
                // onChange={handleChange}
              />
            </div>

            <div>
              <label>Gender</label>
              <div>
                <input
                  name="gender"
                  type="radio"
                  // value={"male"}
                  // onChange={handleChange}
                />{" "}
                Male
                <input
                  name="gender"
                  type="radio"
                  // value={"female"}
                  // onChange={handleChange}
                />{" "}
                Female
              </div>
            </div>

            <div>
              <label>Hobbies</label>
              <div>
                <input
                  name="hobbies"
                  type="checkbox"
                  // value={"reading"}
                  // onChange={handleChange}
                />{" "}
                Reading
                <input
                  name="hobbies"
                  type="checkbox"
                  // value={"sports"}
                  // onChange={handleChange}
                />{" "}
                Sports
              </div>
            </div>

            <div>
              <label>Country</label>
              <select
                name="country"
                // value={form.country}
                // onChange={handleChange}
              >
                <option value={""}>Select</option>
                <option value={"india"}>India</option>
                <option value={"usa"}>USA</option>
                <option value={"uae"}>UAE</option>
              </select>
            </div>

            <div>
              <label>Bio</label>
              <textarea
                name="bio"
                // value={form.bio} onChange={handleChange}
              />
            </div>

            <div>
              <label> File</label>
              <input
                type="file"
                name="file"
                // onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="paginationHolder">
          <Pagination count={10} size="small" />
        </div>
      </div>
    </Container>
  );
};

export default Products;
