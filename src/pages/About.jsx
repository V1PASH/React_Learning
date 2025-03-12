import Card from "../components/Card";

function About(){
const Users=
[
    {
      user:
      {
        userName:"Amanda",
        Title:"CEO Founder",
        ImgSrc:"/src/assets/images/user1.jpg",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quis deleniti harum praesentium illo expedita. Doloremque non magnam sit adipisci.",
        Contact:"#",
        SocialLinks:{
        link1:
        {
          SocialIcon:`<i class="fa-brands fa-instagram"></i>`,
          SocialLinks:"#"
        }
        ,
        link2:{
          SocialIcon:`<i class="fa-brands fa-facebook"></i>`,
          SocialLinks:"#"
        },
      },
      },
    },

    {
      user:
      {
        userName:"Karen",
        Title:"CEO Founder",
        ImgSrc:"/src/assets/images/user2.jpg",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quis deleniti harum praesentium illo expedita. Doloremque non magnam sit adipisci.",
        Contact:"#",
        SocialLinks:{
        link1:
        {
          SocialIcon:`<i class="fa-brands fa-instagram"></i>`,
          SocialLinks:"#"
        }
        ,
        link2:{
          SocialIcon:`<i class="fa-brands fa-facebook"></i>`,
          SocialLinks:"#"
        },
        link3:{
          SocialIcon:`<i class="fa-brands fa-x-twitter"></i>`,
          SocialLinks:"#"
        }
      },
      },
    },
    
    {
      user:
      {
        userName:"Ellie",
        Title:"Director",
        ImgSrc:"/src/assets/images/user3.jpg",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quis deleniti harum praesentium illo expedita. Doloremque non magnam sit adipisci.",
        Contact:"#",
        SocialLinks:{
        link1:
        {
          SocialIcon:`<i class="fa-brands fa-instagram"></i>`,
          SocialLinks:"#"
        }
        ,
        link2:{
          SocialIcon:`<i class="fa-brands fa-facebook"></i>`,
          SocialLinks:"#"
        },
        link3:{
          SocialIcon:`<i class="fa-brands fa-x-twitter"></i>`,
          SocialLinks:"#"
        }
      },
      },
    },
    
    {
      user:
      {
        userName:"Danial",
        Title:"Market leader",
        ImgSrc:"/src/assets/images/user4.jpg",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quis deleniti harum praesentium illo expedita. Doloremque non magnam sit adipisci.",
        Contact:"#",
        SocialLinks:{
        link1:
        {
          SocialIcon:`<i class="fa-brands fa-instagram"></i>`,
          SocialLinks:"#"
        }
        ,
        link2:{
          SocialIcon:`<i class="fa-brands fa-facebook"></i>`,
          SocialLinks:"#"
        },
        link3:{
          SocialIcon:`<i class="fa-brands fa-x-twitter"></i>`,
          SocialLinks:"#"
        }
      },
      },
    },

    {
      user:
      {
        userName:"Danial",
        Title:"Market leader",
        ImgSrc:"/src/assets/images/user4.jpg",
        Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quis deleniti harum praesentium illo expedita. Doloremque non magnam sit adipisci.",
        Contact:"#",
        SocialLinks:{
        link1:
        {
          SocialIcon:`<i class="fa-brands fa-instagram"></i>`,
          SocialLinks:"#"
        }
        ,
        link2:{
          SocialIcon:`<i class="fa-brands fa-facebook"></i>`,
          SocialLinks:"#"
        },
        link3:{
          SocialIcon:`<i class="fa-brands fa-x-twitter"></i>`,
          SocialLinks:"#"
        }
      },
      },
    },
    
    
];
    return(
        <>
        <h1>About Page</h1>

        <div className="cards">
        {
          Users.map( (item)=>(<Card User={item} key={item.user.userName}/>) )
        }
        </div>
        </>
    )
}

export default About