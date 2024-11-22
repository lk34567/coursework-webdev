(() => {
    console.info("ready");
    const courselist = document.getElementById("compcourselist");
    fetch("data/compcourse.json")
    .then(response => response.json())
    .then(data => {
        console.dir(data);
        data["compcourselist"].forEach((item) => {
          const row = document.createElement("tr");
          const CourseTitlecell = document.createElement("td");
          const CourseTypecell = document.createElement("td");
          const Coursesummarycell = document.createElement("td");
          const CourseAwardNamecell  = document.createElement("td");
          const UcasCodecell  = document.createElement("td");
          const UcasPointscell  = document.createElement("td");
          const YearOfEntrycell = document.createElement("td");
          const ModeOfAttendancecell = document.createElement("td");
          const StudyLengthcell = document.createElement("td");
          const hasFoundationYearcell = document.createElement("td");
          const courseSubjectcell = document.createElement("td");
          const NoLongerRecruitingcell  = document.createElement("td");
        
        
          CourseTitlecell.textContent = item.CourseTitle
          CourseTypecell.textContent = item.CourseType
          Coursesummarycell.textContent = item.CourseSummary
          CourseAwardNamecell.textContent =  item.CourseAwardName
          UcasCodecell.textContent = item.UcasCode
          UcasPointscell.textContent = item.UcasPoints
          YearOfEntrycell.textContent = item.YearOfEntry
          ModeOfAttendancecell.textContent = item.ModeOfAttendance
          StudyLengthcell.textContent = item.StudyLength
          hasFoundationYearcell.textContent = item.HasFoundationYear 
          courseSubjectcell.textContent = item.CourseSubject
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



(() => {
    console.info("ready");
    const courselist = document.getElementById("descourselist");
    fetch("data/descourse.json")
    .then(response => response.json())
    .then(data => {
        console.dir(data);
        data["descourselist"].forEach((item) => {
          const row = document.createElement("tr");
          const CourseTitlecell = document.createElement("td");
          const CourseTypecell = document.createElement("td");
          const Coursesummarycell = document.createElement("td");
          const CourseAwardNamecell  = document.createElement("td");
          const UcasCodecell  = document.createElement("td");
          const UcasPointscell  = document.createElement("td");
          const YearOfEntrycell = document.createElement("td");
          const ModeOfAttendancecell = document.createElement("td");
          const StudyLengthcell = document.createElement("td");
          const hasFoundationYearcell = document.createElement("td");
          const courseSubjectcell = document.createElement("td");
          const NoLongerRecruitingcell  = document.createElement("td");
        
        
          CourseTitlecell.textContent = item.CourseTitle
          CourseTypecell.textContent = item.CourseType
          Coursesummarycell.textContent = item.CourseSummary
          CourseAwardNamecell.textContent =  item.CourseAwardName
          UcasCodecell.textContent = item.UcasCode
          UcasPointscell.textContent = item.UcasPoints
          YearOfEntrycell.textContent = item.YearOfEntry
          ModeOfAttendancecell.textContent = item.ModeOfAttendance
          StudyLengthcell.textContent = item.StudyLength
          hasFoundationYearcell.textContent = item.HasFoundationYear 
          courseSubjectcell.textContent = item.CourseSubject
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


