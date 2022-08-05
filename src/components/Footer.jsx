import React from 'react'
import './style.css';

export const Footer = () => {
  return (
    <div>
        <footer className="footer_outer">
            <div className="footer_top">
                <nav className="inner">
                    <ul>
                        <li>home</li>
                        &middot;
                        <li>about us</li>
                        &middot;
                        <li>agreement</li>
                        &middot;
                        <li>privacypolicy</li>
                        &middot;
                        <li>storeguide</li>
                        &middot;
                        <li>cscenter</li>
                    </ul>
                </nav>
            </div>
            <div className="footer_center">
                <div className="inner footer_center_inner">
                    <div className="footer_center_l">
                    <span>상호명 : (주)컨슈머브릿지</span>대표: 신재현, 박성환
                    개인정보보호책임자: 신재현
                    사업자등록번호:
                    713-86-01467<br></br>
                    통신판매업신고번호:제2021-서울강남-02469호
                    <br></br>
                    사업장소재지: 서울 강남구 테헤란로2길 27 패스트파이브 빌딩 9층 915호<br></br>
                    주식회사 컨슈머브릿지는 전자상거래 등에서의 소비자보호에 관한 법률에 따른 통신판매중개자로서
                    <br></br>
                    중개하는 통신판매에 관하여서는 통신판매의 당사자가 아니며
                    상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                    </div>
                    <div className="footer_center_r">
                        <img src={'./image/logo.png'} alt="코케로고"/>
                    </div>
                </div>
            </div>
            <div className="footer_copy">
                <div className="inner">
                    &copy;2021 Consumer Bridge, Inc. All rights reserved
                </div>
            </div>
        </footer>
    </div>
  )
}
