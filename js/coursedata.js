(() => {
    console.info("ready");
    const courselist = document.getElementById("courselist");
    fetch("data/course.json")
    .then(response => response.json())
    .then(data => {
        console.dir(courselist);
        data["courselist"].foreach((item) => {
          const row = document.createElement("tr");
          const CourseTitlecell = document.createElement("tr");
          const CourseTypecell = document.createElement("tr");
          const Coursesummarycell = document.createElement("tr");
          const CourseAwardNamecell  = document.createElement("tr");
          const UcasCodecell  = document.createElement("tr");
          const UcasPointscell  = document.createElement("tr");
          const YearOfEntrycell = document.createElement("tr");
          const ModeOfAttendancecell = document.createElement("tr");
          const StudyLengthcell = document.createElement("tr");
          const hasFoundationYearcell = document.createElement("tr");
          const courseSubjectcell = document.createElement("tr");
          const NoLongerRecruitingcell  = document.createElement("tr");
        
        
          CourseTitlecell.textContent = item.CourseTitle
          CourseTypecell.textContent = item.CourseType
          Coursesummarycell.textContent = item.Coursesummary
          CourseAwardNamecell.textContent =  item.CourseAwardName
          UcasCodecell.textContent = item.UcasCode
          UcasPointscell.textContent = item.UcasPoints
          YearOfEntrycell.textContent = item.YearOfEntry
          ModeOfAttendancecell.textContent = item.ModeOfAttendance
          StudyLengthcell.textContent = item.StudyLength
          hasFoundationYearcell.textContent = item.hasFoundationYear
          courseSubjectcell.textContent = item.courseSubject
          NoLongerRecruitingcell.textContent = item.NoLongerRecruiting

          row.appendChild(CourseTitlecell);
          row.appendChild(CourseTypecell);
          row.appendChild(Coursesummarycell);
          row.appendChild(CourseAwardNamecell);
          row.appendChild(UcasCodecell);
          row.appendChild(UcasPointscell);
          row.appendChild(YearOfEntrycell);
          row.appendChild(ModeOfAttendancecell);
          row.appendChild(StudyLengthcell);
          row.appendChild(hasFoundationYearcell);
          row.appendChild(courseSubjectcell);
          row.appendChild(NoLongerRecruitingcell);
          courselist.appendChild(row);
    });
})

        .catch((error)=> {
            console.error("error loading JSON:" ,error);

        });





  
   
})();

