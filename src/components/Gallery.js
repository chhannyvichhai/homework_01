export function Gallery(){
    return (
     <section className="mt-5">
         <h1 style={heading}>Amazing Students</h1>
         <Profile/>
         <Profile/>
         <Profile/>
     </section>
    )
 }
 
 export function Profile(){
     return (
        
             <img 
             src="https://cdn.pixabay.com/photo/2018/09/11/19/49/education-3670453_1280.jpg" 
             alt="students" 
             style={{width: 500, padding: 20}}
         />
        
     )
 }
 
 //object stylesheet
 const heading = {
     textAlign : 'center',
     fontSize : 50
 
 }