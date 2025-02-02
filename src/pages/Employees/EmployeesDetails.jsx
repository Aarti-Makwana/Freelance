import React from "react"
import PropTypes from "prop-types"
import {
  Row,
  Col,
  Form,
  Label,
  Card,
  CardBody,
  CardTitle,
  Container,
  Input
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

// Form Mask
import InputMask from "react-input-mask"

const EmployeesDetails = () => {
  //meta title
  document.title = "Form Mask | Skote - Vite React Admin & Dashboard Template"

  const Repeat = props => (
    <InputMask
      mask="9999999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >     
    </InputMask>
  )


  const IPV4 = props => (
    <InputMask
      mask="999.999.999.999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >
         </InputMask>
  )
  const TAX = props => (
    <InputMask
      mask="99-9999999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >    
    </InputMask>
  )

  const Phone = props => (
    <InputMask
      mask="(999) 999-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >     
    </InputMask>
  )

  const Currency = props => (
    <InputMask
      mask="$ 999,999,999.00"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >      
    </InputMask>
  )

  const Date1 = props => (
    <InputMask
      mask="99/99/9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >     
    </InputMask>
  )

  const Date2 = props => (
    <InputMask
      mask="99-99-9999"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >     
    </InputMask>
  )

  const Date3 = props => (
    <InputMask
      mask="9999-99-99 99:99:99"
      value={props.value}
      className="form-control input-color"
      onChange={props.onChange}
    >     
    </InputMask>
  )

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Employees Details" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  {/* <CardTitle className="mb-4">Example</CardTitle> */}
                  <Form>
                    <Row>
                      <Col lg={6}>
                        <div>
                          <div className="form-group mb-4">
                          <Label>First Name</Label>
                        <Input
                          name="fname"
                          type="text"
                          placeholder="Enter First Name"
                        //   onChange={validation.handleChange}
                        //   onBlur={validation.handleBlur}
                        //   value={validation.values.fname || ""}
                        //   invalid={
                        //     validation.touched.fname && validation.errors.fname
                        //       ? true
                        //       : false
                        //   }
                        />
                        {/* {validation.touched.fname && validation.errors.fname ? (
                          <FormFeedback type="invalid">
                            {validation.errors.fname}
                          </FormFeedback>
                        ) : null} */}
                          </div>
                          <div className="form-group mb-4">
                            <Label for="input-date2">Last Name</Label>
                            <Input
                          name="fname"
                          type="text"
                          placeholder="Enter Last Name"
                        //   onChange={validation.handleChange}
                        //   onBlur={validation.handleBlur}
                        //   value={validation.values.fname || ""}
                        //   invalid={
                        //     validation.touched.fname && validation.errors.fname
                        //       ? true
                        //       : false
                        //   }
                        />
                          </div>
                          <div className="form-group mb-4">
                            <Label for="input-datetime">Date time</Label>
                            <Date3 />
                            <span className="text-muted">e.g "yyyy-mm-dd'T'HH:MM:ss"</span>
                          </div>
                          <div className="form-group mb-0">
                            <Label for="input-currency">Currency:</Label>
                            <Currency />
                            <span className="text-muted">e.g "$ 0.00"</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mt-4 mt-lg-0">
                          <div className="form-group mb-4">
                            <Label for="input-repeat">repeat:</Label>
                            <Repeat />
                            <span className="text-muted">e.g "9999999999"</span>
                          </div>
                          <div className="form-group mb-4">
                            <Label for="input-mask">Mask</Label>
                            <TAX />
                            <span className="text-muted">e.g "99-9999999"</span>
                          </div>
                          <div className="form-group mb-4">
                            <Label for="input-ip">IP address</Label>
                            <IPV4 />
                            <span className="text-muted">e.g "99.99.99.99"</span>

                          </div>
                          <div className="form-group mb-0">
                            <Label for="input-email">Email address:</Label>
                            <Phone />
                            <span className="text-muted">_@_._</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

EmployeesDetails.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
}

export default EmployeesDetails
