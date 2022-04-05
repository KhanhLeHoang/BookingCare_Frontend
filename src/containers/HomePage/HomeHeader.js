import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changeLanguageApp } from '../../store/actions';


class HomeHeader extends Component {

  changeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language)
  }

  render() {
    let language = this.props.language
    return (
      <>
        <div className='home-header-container'>
          <div className='home-header-content'>
            <div className='left-content'>
              <i className='fas fa-bars'></i>
              <img className='header-logo' src={logo} />
            </div>
            <div className='center-content'>
              <div className='child-content'>
                <div><b><FormattedMessage id="home-header.speciality" /></b></div>
                <div className='subs-title'>Tìm bác sĩ theo chuyên khoa</div>
              </div>
              <div className='child-content'>
                <div><b>Cơ sở y tế</b></div>
                <div className='subs-title'>Chọn bệnh viện phòng khám</div>
              </div>
              <div className='child-content'>
                <div><b>Bác sĩ</b></div>
                <div className='subs-title'>Chọn bác sĩ giỏi</div>
              </div>
              <div className='child-content'>
                <div><b>Gói khám</b></div>
                <div className='subs-title'>Khám sức khỏe tổng quát</div>
              </div>
            </div>
            <div className='right-content'>
              <div className='support'><i className='fas fa-question-circle'></i>Hỗ trợ</div>
              <div className={language === LANGUAGES.VI ? 'language active' : 'language'}><span onClick={() => { this.changeLanguage(LANGUAGES.VI) }}>VN</span></div>
              <div className={language === LANGUAGES.EN ? 'language active' : 'language'}><span onClick={() => { this.changeLanguage(LANGUAGES.EN) }}>EN</span></div>
            </div>
          </div>
        </div>
        <div className='home-header-banner'>
          <div className='content-up'>
            <div className='title1'>NỀN TẢNG Y TẾ</div>
            <div className='title2'>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</div>
            <div className='search'>
              <i className='fas fa-search'></i>
              <input className='text' placeholder='Tìm kiếm' />
            </div>
          </div>
          <div className='content-down'>
            <div className='options'>
              <div className='options-child'>
                <div className='icon-child'><i className='fas fa-hospital'></i></div>
                <div className='text-child'>Khám chuyên khoa</div>
              </div>
              <div className='options-child'>
                <div className='icon-child'><i className='fas fa-procedures'></i></div>
                <div className='text-child'>Khám từ xa</div>
              </div>
              <div className='options-child'>
                <div className='icon-child'><i className='fas fa-flask'></i></div>
                <div className='text-child'>Khám tổng quát</div>
              </div>
              <div className='options-child'>
                <div className='icon-child'><i className='fas fa-user-md'></i></div>
                <div className='text-child'>Sức khỏe tinh thần</div>
              </div>
              <div className='options-child'>
                <div className='icon-child'><i className='fas fa-hospital'></i></div>
                <div className='text-child'>Khám nha khoa</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
