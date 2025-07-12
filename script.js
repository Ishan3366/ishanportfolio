import {
  skillsData,
  experienceData,
  educationDetails,
  words,
  projectsData
} from "./mockdata.js";
var i = 0; // Index of the current word
var offset = 0; // Current position in the word
var forwards = true; // Direction of animation (true: forward, false: backward)
var skip_count = 0; // Skip counter to pause between word transitions
var skip_delay = 15; // Delay before switching directions (in iterations)
var speed = 50; // Speed of animation (in milliseconds)

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false; // Switch to backward animation
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true; // Switch to forward animation
        i++;
        offset = 0;

        // Loop back to the first word when reaching the end
        if (i >= words.length) {
          i = 0;
        }
      }
    }

    // Update the displayed part of the word
    var part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++; // Move forward
      } else {
        offset--; // Move backward
      }
    }

    // Update the text in the `.word` element
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

function skillItems(items) {
  return (items || []).map((item) => {
    return `
 <div class="col text-center">
    ${
      item.icon
        ? `<i class="${item.icon}"></i>`
        : item.img
        ? `<img src="${item.img}" alt="${item.name}" class="img-fluid" />`
        : item.svg
        ? `${item.svg}`
        : ""
    }
    <h6 class="mt-2">${item.name}</h6>
  </div>
            `;
  });
}

function htmlData(skillsData) {
  return skillsData.map((skills, index) => {
    const rowDataHtml = getSkillRowHtml(skills).join("");
    return `
        <div class="d-md-flex justify-content-center">
            ${rowDataHtml}
        </div>
        ${
          index < skillsData.length - 1
            ? '<hr class="m-5 d-none d-md-block">'
            : ""
        }
        `;
  });
}

function getSkillRowHtml(skills) {
  const result = skills.map((skill) => {
    const frameworkHtml = skillItems(skill.framework).join("");
    const languageHtml = skillItems(skill.languages).join("");
    const otherSkillHtml = skillItems(skill.otherskills).join("");
    return `
        <div class="${skill.classes}" data-aos="${skill.animation}">
            <div class="text-center">
                ${skill.icon ? skill.icon : skill.svg}
                <h3 class="d-flex justify-content-center fw-bolder mt-3">${
                  skill.title
                }</h3>
            </div>
            ${
              otherSkillHtml
                ? `<div>
            <div class="row row-cols-2 row-cols-md-3 g-3">
                ${otherSkillHtml}
            </div>
        </div>`
                : ``
            }
            ${
              frameworkHtml
                ? `<div>
            <div class="row row-cols-2 row-cols-md-3 g-3">
                ${frameworkHtml}
            </div>
        </div>`
                : ``
            }
           ${
             languageHtml
               ? `<div class="" data-aos="zoom-in-right">
           <h5 class="d-flex justify-content-center text-warning m-md-5 m-sm-3">Languages</h5>
           <div class="row row-cols-2 row-cols-md-3 g-3">
               ${languageHtml}
           </div>
       </div>`
               : ``
           }
        </div>
        `;
  });
  return result;
}

function Skills(data) {
  const html = htmlData(data);
  document.getElementById("skill-container").innerHTML = html.join("");
}

Skills(skillsData);

function description(info) {
  return (item || []).map((info) => {
    return ``;
  });
}

function expData(experience) {
  const result = experience.map((exp) => {
    return `
        <div class="d-flex justify-content-md-center ">
            <div class=" col-5 m-0 d-none d-md-block ms-5" data-aos="zoom-in-right">
                <p class="fw-bolder fs-5 m-0 ">${exp.company}</p>
                <p class="mt-2 m-0 ">${exp.duration}</p>
            </div>
            <div class="d-flex flex-column align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffc400"
                    class="p-2 bi bi-circle-fill circle-fill rounded-circle" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                </svg>
                <div class="line-b h-100 m-auto"></div>
            </div>
            <div class="d-flex col-md-6 " data-aos="zoom-in-left">
                <div class="ms-5 mb-3">
                    <p class="fw-bolder fs-5 m-0 d-md-none d-sm-block ">${exp.company}</p>
                    <p class="fw-bolder fs-5 m-0 ">${exp.positon}</p>
                    <p class="m-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc400"
                            class="bi bi-briefcase-fill m-2" viewBox="0 0 16 16">
                            <path
                                d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                        </svg> Full-time</p>
                    ${exp.description}    
                </div>
            </div>
        </div>
        `;
  });
  return result;
}

function experienceInfo(data) {
  const html = expData(data);
  document.getElementById("experience-data").innerHTML = html.join("");
}

experienceInfo(experienceData);

function educationData(qualification) {
  const result = qualification.map((value) => {
    return `        
        <div class="" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <p class="text-warning">
            ${value.year}
        </p>
        <h1>${value.class}</h1>
        <h4>${value.address}</h4>
        </div>
        <hr class="my-5 d-none d-md-block">
        `;
  });
  return result;
}

function education(data) {
  const html = educationData(data);
  document.getElementById("qualification").innerHTML = html.join("");
}

education(educationDetails);


function renderProjects(data) {
  const html = data.map((project) => {
    const imageHtml = project.images
      .map(
        (img) => `<img src="${img}" alt="${project.title}" class="img-fluid rounded mb-2 me-2" style="max-width: 500px;">`
      )
      .join("");

    return `
      <div class="project mb-5" data-aos="fade-up">
        <h3 class="fw-bold">${project.title}</h3>
        <div class="project-description">
          ${project.description}
        </div>
        <div class="project-images d-flex flex-wrap">
          ${imageHtml}
        </div>
      </div>
    `;
  });

  document.getElementById("projects-container").innerHTML = html.join("");
}

renderProjects(projectsData);
