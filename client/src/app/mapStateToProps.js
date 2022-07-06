function mapStateToProps(state) {
    const {flightdata} = state.flightdata;
    return {flightList: flightdata}
}