import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import "./index.css";
import img1 from "./image/img-1.jpg";
import img2 from "./image/img-2.jpg";
import img3 from "./image/img-3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const App=() =>{
     
    // Aos animation

    useEffect(()=>{
    Aos.init({duration:1500});
    },[])
    // Aos animation
    
    const [show1,setShow1]= useState(false);
    const [show2,setShow2]= useState(false);
    const [show3,setShow3]= useState(false);
    const [show4,setShow4]= useState(false);

    return(<>
    
    <section className="section" id="img1">
    
    <div id="Parallax">
   <h1>A clinical research study for people with myelodysplastic syndromes with anemia.</h1>
   <br />
   <p>The study is to compare the effectiveness of a study drug versus a standard-of care therapy. Individuals will be evaluated to determine their eligibility to participate. Each person who qualities will receive either the study drug or standard-of-care therapy, study-related medical exams, and study-related laboratory tests at no cost.</p>
   <br />
   <button className="btn1">Check my eligiblity? </button>
   <button className="btn2">Check more</button>
   </div>
   </section>
   <section className="division" id="One">
      <div className="text"> <h2> Are blood transfusions holding you back?</h2>
        <br />
    <p data-aos="fade-up">
    The purpose of the study is to compare the effectiveness of a study drug versus a standard-of-care 
    therapy Individuals will be evaluated to determine their eligibility to participate. Each person who
    qualifies will receive either the study drug or standard-of-care therapy, study-related medical exams,
    and study related laboratory tests at no cost.</p>
  </div>
   </section>
   <section  id="img2">
   <h3 data-aos="flip-up">About the study</h3>
   <br/>
   <p data-aos="flip-up">Here our some key highlights of our study</p>
   <div id="innerdiv">
      <div className="study1">
          <h4>Eligibility</h4>
          <br />
          <p data-aos="fade-up">18 years or older participants with symptoms of MDS or anemia</p>
      </div>
      <div className="study1">
      <h4>Monthly Check-ups</h4>
      <br />
          <p data-aos="fade-up">A check-up every third weekend of the month to keep track of patient's health and recovery</p>
          </div>
      <div className="study1">
      <h4>Treatment Peroid</h4>
      <br />
          <p data-aos="fade-up">The total treatment period of this study is about 20-24 weeks</p>
      </div>
      
      <div className="study1">
      <h4>Compensation</h4>
      <br />
          <p data-aos="fade-up">Participants might receive up to $300 for taking part in the study</p>
          </div>
   </div>
   </section>
   <section  id="Two">
   <div  data-aos="fade-up" className="text" id="text1">
   <h2>What is MDS and anemia?</h2>
<br />
<p>MDS is a rare blood cancer in which blood cells in the bone marrow do not grow to become healthy red
 blood cells, white blood cells, or platelets - all the vital components of blood. Not being able to 
 develop healthy red blood cells leads to anemia, which is common with MDS. Anemia has many of the 
 same symptoms as MDS and causes even greater fatigue.</p>
<br />
<p >It can be exhausting to live with a condition that makes you feel like you're being held back. If 
you're caring for a loved one with the condition, it can be equally trying However, right now, 
research is underway on an investigational study drug to see if it may help alleviate arvemic symptoms
 and bener manage your MDS. And you may be able to take part in this study.</p>
 </div>
 <div className="text" id="text2">
 <h2 data-aos="fade-up">Let's find out if you are eligible for this study.</h2>
<br /><p data-aos="fade-up"  data-aos-delay="250">
Take up this questionnaire to help us determine if you have symptoms that are common for MDS and anemia If you have the common symptoms, you may be eligible to take part in the study
</p><br />
<button data-aos="fade-up"  data-aos-delay="500" className="btn2">Start answering  <i class='fas fa-arrow-right'></i>
</button>

 </div>

 <div className="text" id="text3">

     <h2 data-aos="flip-up">Frequently asked questions</h2>
     <br />
     <div className="que" id="que1">
     <h4 onClick={()=>setShow1(!show1)}>What do i have to do in the study?
     <button className="arrow" ><i class='fas fa-angle-down'></i></button>
     </h4>{
        show1? <p>Participate in various study activities, such as a screening visit. eligibility review, and a treatment period, over the course of 
     about 3 months. This includes a 6-week treatment period where participants apply the study treatment 2x per day, send weekly photos of 
     their lower legs and have a weekly video visit with a study coach. The study will conclude with an in-home visit when you end treatment 
     and a video follow-up visit 4 weeks later. We will provide all
      instructions and devices needed </p>:null
     }
     
      </div>

      <div className="que" id="que2">
     <h4 onClick={()=>setShow2(!show2)}>How long is the study?
     <button className="arrow"><i class='fas fa-angle-down'></i></button>
     </h4>{
        show2? <p>The study will last about 14 weeks , including 6
         weeks using the study ointment and 4 weeks of follow-ups </p>:null
     }
      </div>

      <div className="que" id="que3">
     <h4 onClick={()=>setShow3(!show3)}>Can I continue to wear compression socks during the study?
     <button className="arrow" ><i class='fas fa-angle-down'></i></button>
     </h4>{
        show3? <p>Since compression stockings are often recommended for 
        those suffering from Stasis Dermatitis, we ask that if you are 
        using compression stockings today, that you continue to wear them
         during the study. That said, wearing compression stockings is

not required for this study. </p>:null
     }
      </div>

      <div className="que" id="que4">
     <h4 onClick={()=>setShow4(!show4)}>What is an at-home clinical study?
     <button className="arrow" ><i class='fas fa-angle-down'></i></button>
     </h4>{
        show4?
     <p>An at-home (or remote) clinical study is one in which you can 
     fully participate at your home. This means there is no need to visit 
     a doctor's office, lab or hospital. We will deliver any materials you
      may need to participate, and you'll be able to mail items back to us
       that need to be returned in the regular mail.</p>:null
       }
      </div>
 </div>
  </section>
  <section id="bg1">
  <section className="Three" id="d1">
            <div id="innertext">
            <h3>Research Facility</h3><br />
            <p data-aos="fade-up"> The research labs at our study
             sites use-state of-the-art equipment operated by highly qualified secanicians.</p>
            </div>
        <img data-aos="fade-up" src={img1} />
        </section>

        <section className="Three" id="d2">
            
        <img data-aos="fade-up" src={img2} />
        <div >
            <h3>Monthly</h3><br />
            <p data-aos="fade-up"> The research labs at our study
             sites use-state of-the-art equipment operated by highly qualified secanicians.</p>
            </div>
        </section> 
        <section className="Three" id="d3">
            
       
        <div >
            <h3>Monthly</h3><br />
            <p data-aos="fade-up"> The research labs at our study
             sites use-state of-the-art equipment operated by highly qualified secanicians.</p>
            </div>
            <img data-aos="fade-up" src={img3} />
        </section> 
</section>

<div className="text" id="text4">
   <h2>Patient Journey</h2>
<br />
<ol>
    <li>
        <h5>Check eligibility</h5>
        
        <p data-aos="fade-up">Check your eligibility by taking up the <a href="#">eligibility
         tests</a>., if you are eligibile,you can connect with the learn 
         at a study site of your choice.</p>
        <br />
    </li>
    <li>
        <h5>Screening period</h5>
        <p data-aos="fade-up">The team will connect with you and screen you with other preliminary
        tests. this can take up to 30-35 days which may be extended. </p>
        <br />
    </li>
    <li>
        <h5>Treatment period</h5>
        <p data-aos="fade-up">Eligible candidates will receive initial treatment for up to 24
         weeks during which the health, sleep and physical activities will
          be monitored </p>
        <br />
    </li>
    <li>
        <h5>Follow-up period</h5>
        <p data-aos="fade-up">A follow-up period where you will be contacted approximately every 12 weeks to ask how you are doing. </p>
        <br />
    </li>
   
        
</ol>
 </div>
 <section  id="img3">
   <h3>Got a question?</h3>
   <br/>
      <div id="inp">
      <input data-aos="fade-up" placeholder="Name" id="name"></input>
      <input data-aos="fade-up" placeholder="Email" id="email"></input>
      </div>
      <input data-aos="fade-up"  data-aos-delay="250" placeholder="Questions" id="quest"></input>
      <br/>
      <button data-aos="fade-up" data-aos-delay="500" className="btn1">Send Message</button>
   </section>

   <section className="Four" data-aos="fade-up">
            <p  id="g1"><b data-aos="fade-up">Address</b>
                <br/>
                xyz...
            </p>
            <p id="g2"><b data-aos="fade-up">Links</b>
            <br />
            <a href="#img2"> About </a>
            <br />
            
             <a href="#img3"> F&Q </a><br />
            <a href="#">Eligiblity</a><br />
             <a href=" #bg1"> Features </a><br />
             <a href=" #text4"> Journey </a>
            </p>
            <p id="g3"><b data-aos="fade-up">Contacts</b>
                <br />
                xyz@gmail.common
            </p>
        </section>

   {/* --navvv-- */}
   <div class="nav">
   <i id="logo"></i>
    <b id="logonm"> iConnect</b>
      <section id="nav_bar">
          <a href=" #img2"> About </a>
             
          <a href=" #text3"> F&Q </a>
             
          <a href=" #bg1"> Features </a>
          <a href=" #text4"> Journey </a>
             
             <button className="btn1"> Am I eligibile? </button>
      </section>
      </div>
      {/* --navvv-- */}


      
  </>)}

  
  ReactDOM.render(<App />,document.getElementById("root"))
  