// Course.mjs
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "RKS 204",
        enrolled: 12,
        days: "MW",
        instructor: "Sister Travis",
      },
      {
        sectionNum: 2,
        roomNum: "CLK 391",
        enrolled: 23,
        days: "MW",
        instructor: "Brother Sinclair",
      },
    ],
    init: function() {
      setCourseInfo(this);
      renderSections(this.sections);
    },
    changeEnrollment: function (sectionNum, add = true) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        if (add) {
          this.sections[sectionIndex].enrolled++;
        } else {
          this.sections[sectionIndex].enrolled--;
        }
        renderSections(this.sections);
      }
    },
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  export default aCourse;