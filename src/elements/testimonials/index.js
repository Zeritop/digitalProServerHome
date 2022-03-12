import styled from 'styled-components'

const ContainerTestimonials = styled.div`
    width: 100%;
`;

const Testimonial = styled.div`
    width: 270px;
    height: 132px;
    background-color: #9b9b9b;
    padding-top: 20px;
    padding-left: 10px;
    margin-left: 10px;
`;

const DiseñoTestimonial = styled.div`
    width: 0;
    height: 0;
    border-right: 15px solid #313131;
    border-top: 15px solid #313131;
    border-left: 15px solid transparent;
    border-bottom: 15px solid transparent;
    margin-left: 10px;
`;

const TextoTestimonial = styled.div`
    width: 270px;
    height: 98px;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
    font-weight: 400;
    font-style: italic;
    font-family: "Ubuntu";
    

    span{
        font-size: 60px;
        line-height: 20px;
        color: #ffffff;
        font-weight: 400;
        font-family: "Entypo";
    }
`;

const Avatar = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    filter: drop-shadow(0px 1px 0.5px rgba(0,0,0,0.25));
    background-color: #c8c8c8;
    border: 4px solid #fafafa;
`;

const ContainerAvatar = styled.div`
    display: flex;
    margin-left: 25px;
`;

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    padding-left: 5px;
    h2{
        font-size: 14px;
        line-height: 20px;
        color: #191919;
        font-weight: 700;
        font-family: "Ubuntu";
    }

    p{
        font-size: 12px;
        line-height: 20px;
        color: #ababab;
        font-weight: 400;
        font-family: "Ubuntu";
    }
`;

export{
    ContainerTestimonials,
    Testimonial,
    DiseñoTestimonial,
    TextoTestimonial,
    Avatar,
    ContainerAvatar,
    Profile
}