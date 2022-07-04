import React, { useState } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from './module';
import styled from "styled-components";
import { NoEncryption } from '@mui/icons-material';
import TryRegister from '../../functions/Auth/TryRegister';
import CheckRepetition from '../../functions/Auth/CheckRepetition';

const InputAndButton = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: end;
    width: 100%;
    margin-top: 0.6em;
    margin-bottom: 0.6em;
`

const Button = styled.div`
    background-color: rgba(84, 128, 229, 1);
    height: 60%;
    text-align: center;
    line-height: 3;
    border-radius: 4px;
    font-size: 16px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    flex-grow: 0.5;
    margin-left: 0.7em;
`

const Register = () => {
    const [info, setInfo] = useState({})

    // console.log(info)

    return (
        <AuthContent title="JOIN">

            <InputAndButton>
                <InputWithLabel
                    onChange={(event)=>{
                        setInfo({
                            ...info,
                            email: event.target.value
                    })}}
                    label="메일 주소" name="email" placeholder="sasm@sdp.com"/>
                <Button
                    onClick={(e)=>CheckRepetition(e.target.id, info.email)}
                    id='email'
                >  
                    중복확인
                </Button>
            </InputAndButton>

            <InputAndButton>
                <InputWithLabel 
                    onChange={(event)=>{
                        setInfo({
                            ...info,
                            password: event.target.value
                        })}}
                        label="비밀번호" name="password" type="password"
                        />
            </InputAndButton>

            <InputAndButton>
                <InputWithLabel 
                        onChange={(event)=>{
                            setInfo({
                                ...info,
                                passwordConfirm: event.target.value
                            })}}
                            
                            label="비밀번호 확인" name="passwordConfirm" type="password"/>
            </InputAndButton>

            <InputAndButton>
                <InputWithLabel 
                    onChange={(event)=>{
                        setInfo({
                            ...info,
                            nickname: event.target.value
                    })}}
                    label="닉네임" name="nickname"/>
                <Button
                    onClick={(e)=>CheckRepetition(e.target.id, info.nickname)}
                    id='nickname'
                >
                    중복확인
                </Button>
            </InputAndButton>
            
            <InputAndButton>
            <InputWithLabel 
                onChange={(event)=>{
                    setInfo({
                        ...info,
                        dob: event.target.value
                    })}}
                    label="생년월일 (선택)" name="dob" placeholder="ex) 1997.08.30"
                    />
            </InputAndButton>
            
            <InputAndButton>
            <InputWithLabel 
                onChange={(event)=>{
                    setInfo({
                        ...info,
                        location: event.target.value
                    })}}
                    label="거주지역 (선택)" name="location" placeholder="ex) 서울시 마포구 창천동"
                    />
            </InputAndButton>

            <AuthButton 
                style={{
                    color: 'rgba(84, 128, 229, 1)',
                    boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
                    border: 'none',
                    fontSize: '16px',
                    padding: '10px'
                }}
                
                onClick={()=>TryRegister(info)}
            >
                    인증하고 시작하기</AuthButton>
        </AuthContent>
    );
}

export default Register;