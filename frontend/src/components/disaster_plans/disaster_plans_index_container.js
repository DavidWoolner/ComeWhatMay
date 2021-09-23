import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import DisasterPlans from './disaster_plans_index'
import { fetchDisasterPlans, createDisasterPlan } from '../../actions/disaster_plan_actions'

const mSTP = (state, ownProps) =>{
    // debugger
    return {
        disasterPlans: Object.values(state.entities.plans), 
        profileId: ownProps.match.params.profileId
    }   
}

const mDTP = (dispatch, ownProps) =>({
    fetchDisasterPlans: () => dispatch(fetchDisasterPlans(ownProps.match.params.profileId)),
    createDisasterPlan: (id, plan) => dispatch(createDisasterPlan(id, plan))
})

export default withRouter(connect(mSTP, mDTP)(DisasterPlans))