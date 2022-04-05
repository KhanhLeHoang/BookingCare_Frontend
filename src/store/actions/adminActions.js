import actionTypes from './actionTypes';
import {
  getAllUsersService, getAllCodeService, createUserService,
  deleteUserService, editUserService, getTopDoctorService, getAllDoctorsService, saveInfoDoctorService
} from '../../services/userService';
import { toast } from 'react-toastify';

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: actionTypes.FETCH_GENDER_START })
      let res = await getAllCodeService('gender')
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data))
      } else {
        dispatch(fetchGenderFailed())
        console.error(res)
      }
    } catch (error) {
      dispatch(fetchGenderFailed())
      console.log('>>> fetchGenderStart error: ', error.response.data)
    }
  }
}

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData
})

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService('position')
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data))
      } else {
        dispatch(fetchPositionFailed())
        console.error(res)
      }
    } catch (error) {
      dispatch(fetchPositionFailed())
      console.log('>>> fetchPositionStart error: ', error.response.data)
    }
  }
}

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData
})

export const fetchPositionFailed = () => ({
  type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService('role')
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data))
      } else {
        dispatch(fetchRoleFailed())
        console.error(res)
      }
    } catch (error) {
      dispatch(fetchRoleFailed())
      console.log('>>> fetchRoleStart error: ', error.response.data)
    }
  }
}

export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData
})

export const fetchRoleFailed = () => ({
  type: actionTypes.FETCH_ROLE_FAILED
})

export const createNewUserStart = (userData) => {
  return async (dispatch, getState) => {
    try {
      let res = await createUserService(userData)
      if (res && res.errCode === 0) {
        toast.success('Create new user succeed!')
        dispatch(saveUserSuccess())
        dispatch(fetchAllUsersStart())
      } else {
        dispatch(saveUserFailed())
        console.error(res)
      }
    } catch (error) {
      dispatch(saveUserFailed())
      console.log('>>> createNewUserStart error: ', error.response.data)
    }
  }
}

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS
})

export const saveUserFailed = () => ({
  type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUsersStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsersService('ALL')
      if (res && res.errCode === 0) {
        dispatch(fetchAllUsersSuccess(res.data.reverse()))
      } else {
        dispatch(fetchAllUsersFailed())
        console.error(res)
      }
    } catch (error) {
      dispatch(fetchAllUsersFailed())
      console.log('>>> fetchAllUsersStart error: ', error.response.data)
    }
  }
}

export const fetchAllUsersSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data
})

export const fetchAllUsersFailed = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAILED
})

export const deleteUserStart = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId)
      if (res && res.errCode === 0) {
        toast.success('Delete user succeed!')
        dispatch(deleteUserSuccess())
        dispatch(fetchAllUsersStart())
      } else {
        dispatch(deleteUserFailed())
        toast.error('Error: Can not delete user!')
        console.error(res)
      }
    } catch (error) {
      dispatch(deleteUserFailed())
      console.log('>>> deleteUserStart error: ', error.response.data)
    }
  }
}

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS
})

export const deleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED
})

export const editUserStart = (userData) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(userData)
      if (res && res.errCode === 0) {
        toast.success('Update user succeed!')
        dispatch(editUserSuccess())
        dispatch(fetchAllUsersStart())
      } else {
        dispatch(editUserFailed())
        toast.error('Error: Can not update user!')
        console.error(res)
      }
    } catch (error) {
      toast.error('Error: Can not update user!')
      dispatch(editUserFailed())
      console.log('>>> editUserStart error: ', error.response.data)
    }
  }
}

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
  type: actionTypes.EDIT_USER_FAILED
})

export const fetchTopDoctorsStart = (limit) => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorService(limit)
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          data: res.data
        })
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
        })
      }
    } catch (error) {
      console.error('fetchTopDoctorsStart error: ', error)
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
      })
    }
  }
}

export const fetchAllDoctorsStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctorsService()
      console.log(res)
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          data: res.data
        })
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
        })
      }
    } catch (error) {
      console.error('fetchAllDoctorsStart error: ', error)
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
      })
    }
  }
}
export const saveInfoDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveInfoDoctorService(data)
      console.log(res)
      if (res && res.errCode === 0) {
        toast.success('Save infor doctor succeed!')
        dispatch({
          type: actionTypes.SAVE_INFO_DOCTOR_SUCCESS,
          data: res.data
        })
      } else {
        toast.error('Save infor doctor error!')
        dispatch({
          type: actionTypes.SAVE_INFO_DOCTOR_FAILED,
        })
      }
    } catch (error) {
      toast.error('Save infor doctor error!')
      console.error('saveInfoDoctor error: ', error)
      dispatch({
        type: actionTypes.SAVE_INFO_DOCTOR_FAILED,
      })
    }
  }
}