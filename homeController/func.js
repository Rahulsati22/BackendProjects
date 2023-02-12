const CourseModel = require('../model/courses');
const PremiumCourse = require('../model/premium_course');
const Work = require('../model/work');
const Notes = require('../model/notes');
module.exports.home = function(request, response){

    return response.render('home', {
        title : "Home Page",
    });
}
module.exports.notes = function(request, response){
    Notes.find({}, function(error,user){
        if (error){
            console.log('error');
            return;
        }
        else{
            return response.render('notes', {
                title : "Notes",
                notes : user,
            });
        }
    })
}
module.exports.contactUs = function(request,response){
    return response.render('contact',{
        title : "Contact Us",
    });
}
module.exports.work = function(request, response){
    return response.render('work',{
        title : "Work With Us",
    })
}
module.exports.course = async function(request, response){

    const premium_course = await PremiumCourse.find({});
    CourseModel.find({}, function(error,user){
        if (error){
            console.log('error');
            return;
        }
        else{
            return response.render('courses',{
                title : "Courses",
                course : user,
                premium_course
            });
        }
    })
}

module.exports.submit = function(request, response){
    Work.create(request.body,function(error,user){
        if (error){
            console.log('error');
            return;
        }
        else{
            console.log(user);
            return response.render('submit',{
                title : "Work With Us"
            });
        }
    });
}