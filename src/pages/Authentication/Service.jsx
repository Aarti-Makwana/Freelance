import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { getAllCategories, uploadImage } from "../../api/apiServices/api.js";
//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";

// actions
import { getCategories } from "../../store/actions";

import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";

const Services = (props) => {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [catLevel, setCatLevel] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getAllCategorie = async () => {
    try {
      const response = await getAllCategories(
        page,
        limit,
        catLevel,
        parentCategory,
        sort
      );
      if (response?.status) {
        setCategories(response?.categoriesData);
        setPage(response?.page);
      } else {
        setCategories([]);
        console.log("Category not found");
      }
    } catch (error) {
      console.log("Error while getting categories ", error);
    }
  };
  useEffect(() => {
    getAllCategorie();
  }, []);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,
    handleChange: () => {},
    initialValues: {
      image: "",
      categories: "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Please Enter Image"),
      categories: Yup.string().required("Please Select Category"),
    }),
    onSubmit: async (values) => {
      try {
        const { image, category } = values;
        //    await request('/user/login_pass', 'POST', { email, password });
        //    dispatch(loginUser(values, props.router.navigate));
      } catch (error) {
        console.log("Error in services user ", error);
      }
    },
  });

  const LoginProperties = createSelector(
    (state) => state.Login,
    (login) => ({
      error: login.error,
    })
  );

  const { error } = useSelector(LoginProperties);

  const signIn = (type) => {
    dispatch(socialLogin(type, props.router.navigate));
  };

  //for facebook and google authentication
  const socialResponse = (type) => {
    signIn(type);
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      {error ? <Alert color="danger">{error}</Alert> : null}

                      <div className="mb-3">
                        <Label className="form-label">Image</Label>
                        <Input
                          name="image"
                          className="form-control"
                          placeholder="Enter email"
                          type="file"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.image || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        />
                        {validation.touched.image && validation.errors.image ? (
                          <FormFeedback type="invalid">
                            {validation.errors.image}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <Label className="form-label">Select category</Label>
                        <Input
                          name="category"
                          value={validation.values.category || ""}
                          type="select"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.category &&
                            validation.errors.category
                              ? true
                              : false
                          }
                        >
                          <option disabled defaultValue={"Select a category"}>
                            Select a category
                          </option>
                          {categories?.map((data) => {
                            return (
                              <option value={data.name}>{data.name}</option>
                            );
                          })}
                        </Input>
                        {validation.touched.category &&
                        validation.errors.category ? (
                          <FormFeedback type="invalid">
                            {validation.errors.category}
                          </FormFeedback>
                        ) : null}
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Services);

Services.propTypes = {
  history: PropTypes.object,
};
