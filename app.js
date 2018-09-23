const express = require("express");

const path = require("path");

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("email", {
    company_name: "Zypher",
    logo_img: "/img/logo.png",
    tagline: "Thank you for your business",
    subject: "Here are your new policy details!",
    header_img:
      "https://cdn.dribbble.com/users/14268/screenshots/3202528/octopus.png",
    body: [
      { title: "Policy 1", description: "This is some policy" },
      { title: "Policy 1", description: "This is some policy" },
      { title: "Policy 1", description: "This is some policy" },
      {
        title: "Policy 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    ],
    rating_title: "How would you rate your overall shopping experience?",
    phone: "9999 888 777",
    social: {
      fb_link: "https://www.facebook.com/zyphercrew",
      instagram_link: "https://www.instagram.com/zypher.co/",
      linkedin_link: "https://www.linkedin.com/company/teamzypher"
    },
    footer: {
      text: "This is some footer text",
      links: [
        ["Link 1", "#href"],
        ["Link 2", "#href"],
        ["Link 3", "#href"],
        ["Link 4", "#href"],
        ["Link 5", "#href"]
      ]
    }
  });
});

app.get("/demo", (req, res) => {
  res.render("demo");
});

app.listen(port, () => console.log(`Listening to port ${port}`));
