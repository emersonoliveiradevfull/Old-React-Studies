import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import { connect } from "react-redux"
import addStatCardAction from "../../actions/addStatCardAction"
import getAllCadsAction from "../../actions/getAllStatCardsAction"


class Header extends React.Component {
  componentDidMount() {
    this.props.getAllStatCardsAction()
  }

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button color="primary" color="primary" onClick={()=>this.props.addStatCardAction(
                    "Performance",
                    "49,65",
                    "fas fa-precent",
                    "bg-info text-white",
                    "reounded-circle shadow",
                    "fas fa-arrow-up",
                    "text-success",
                    "12%",
                    "since last month"
                    )}></Button>
              </Col>
            </Row>
          </Container>
          <br>
          <Container fluid>
            <div className="header-body">
              <Row>
                {this.props.stateCardState && this.props.stateCardState.statCardState && this.props.statCardState.statCardState.map((prop, key) => {
                    return(
                        <Col lg="6" xl="3" key={key}>
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                                {prop.statName}
                                            </CardTitle>
                                            <span className="h2 font-weight-bold mb-0">
                                                {props.statDescription}
                                            </span>
                                        </div>
                                        <Col className="col-auto">
                                        <div className={
                                            "icon icon-shape" + prop.statIconColor
                                        }>
                                            <i className={pro.statIcon}></i>
                                        </div>

                                        <p className="mt-3 mb-0 text-muted text-sm">
                                            <span className={"mr-2 " + prop.statFooterIconState}>
                                                <i className={prop.statFooterIcon}></i>
                                                {prop.statFooterPercentage}
                                            </span>
                                            <span className="text-nowrap">
                                                {prop.statFooterText}
                                            </span>
                                        </p>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                )}
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}



const mapStateToProps = state => ({...state})


const mapDispatchToProps = dispatch => ({
  getAllStatCardsAction: () =>
      dispatch({
        getAllCardsAction: () => dispatch(
            getAllCadsAction()),
        addStatCardAction: (
            stattName,
            stateDescription,
            stateIcon,
            stateIconColor,
            statFooterIcon,
            statFooterIconState,
            statFooterIconPercentage,
            statFooterText
        ) => dispatch(
            addStatCardAction(
                stattName,
                stateDescription,
                stateIcon,
                stateIconColor,
                statFooterIcon,
                statFooterIconState,
                statFooterIconPercentage,
                statFooterText
            )
        )
      })
})

export default connect(mapStateToProps, mapDispatchToProps())