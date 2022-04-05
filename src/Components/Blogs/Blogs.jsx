import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <Accordion className='container  m-5 p-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q. What is Context API?</Accordion.Header>
        <Accordion.Body>
          Context  API আপনার  application এর সমস্ত component থেকে props drilling   সমাধানে  সহায়তা করে . <br/>
          এটি খুব  powerful. Context  API  react app  এর জন্য global variable তৈরি করে যা  প্রতিটি components এ  manually  একাধিক উপাদান সহ data pass করতে ব্যবহৃত হয়.<br/>
          Dom tree এর প্রতিটি উপাদানের মধ্য দিয়ে props পাঠানোর পরিবর্তে, আমরা কেবল Context  API ব্যবহার করতে পারি , এটা খুব সহজ একটি প্রক্রিয়া.<br/>
          Context  API ব্যবহার করে  application এর মধ্যে একাধিক element  এর মধ্যে state গুলো ভাগ করা সহজ.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q. What is Semantic tag?</Accordion.Header>
        <Accordion.Body>
          একটি  Semantic tag browser  এবং developer  উভয়ের কাছে এর অর্থ স্পষ্ট ভাবে বর্ণনা করে যে এটিতে কী  content  রয়েছে  .<br/>
          Semantic tags ব্যবহার করে , আপনি browser  কে কেবলমাত্র এটি কে display করার জন্যই নয় বিষয়বস্তুর অর্থ বুঝতে ও সাহায্য করেন.<br/>
          Semantic tag  ওয়েব লেআউটের অর্থ আরও ভালভাবে সংজ্ঞায়িত করে .<br/>
          Semantic tag  screen ভিজুয়াল শ্রবণযোগ্য করে যা অন্ধ বা দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীদের অগ্রাধিকার দেওয়ার জন্য  একটি সুস্পষ্ট নির্দেশনা দেয় .<br/>
          এই Semantic tag  সার্চ ইঞ্জিন র‌্যাঙ্কিংয়ে সাহায্য করে .<br/>
          মানুষ এবং  মেশিন পাঠযোগ্য , উভয়ের পক্ষেই এটি পড়া এবং বোঝা সহজ .<br/>
          EXAMPLE:  section, header, main, article, nav, form, table, footer, aside .
        
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
