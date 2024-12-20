using reactApi.Models;

public class TestSeeder
{
    private readonly ApplicationDbContext _context;

    public TestSeeder(ApplicationDbContext context)
    {
        _context = context;
    }

    public void Seed()
    {
        SeedAccommodations();
        SeedActivities();
    }

    public void SeedAccommodations()
    {
        if (!_context.Accommodations.Any())
        {
            IEnumerable<Accommodation> accommodations = new List<Accommodation>()
            {
                new Accommodation("Test1ENG","Test1EST","Test1RUS","Test1FIN","TestBody1ENG","TestBody1EST","TestBody1RUS","TestBody1FIN")
                {
                    TitleENG = "Test1ENG",
                    TitleEST = "Test1EST",
                    TitleRUS = "Test1RUS",
                    TitleFIN = "Test1FIN",
                    BodyENG = "TestBody1ENG",
                    BodyEST = "TestBody1EST",
                    BodyRUS = "TestBody1RUS",
                    BodyFIN = "TestBody1FIN"
                },
                new Accommodation("Test2ENG","Test2EST","Test2RUS","Test2FIN","TestBody2ENG","TestBody2EST","TestBody2RUS","TestBody2FIN")
                {
                    TitleENG = "Test2ENG",
                    TitleEST = "Test2EST",
                    TitleRUS = "Test2RUS",
                    TitleFIN = "Test2FIN",
                    BodyENG = "TestBody2ENG",
                    BodyEST = "TestBody2EST",
                    BodyRUS = "TestBody2RUS",
                    BodyFIN = "TestBody2FIN"
                },
            };

            _context.Accommodations.AddRange(accommodations);
            _context.SaveChanges();
        }
    }

    public void SeedActivities()
    {
        if (!_context.Activities.Any())
        {
            IEnumerable<Activity> activities = new List<Activity>()
            {
                new Activity("TestActivity1ENG","TestActivity1EST","TestActivity1RUS","TestActivity1FIN","TestActivityBody1ENG","TestActivityBody1EST","TestActivityBody1RUS","TestActivityBody1FIN")
                {
                    TitleENG = "TestActivity1ENG",
                    TitleEST = "TestActivity1EST",
                    TitleRUS = "TestActivity1RUS",
                    TitleFIN = "TestActivity1FIN",
                    BodyENG = "TestActivityBody1ENG",
                    BodyEST = "TestActivityBody1EST",
                    BodyRUS = "TestActivityBody1RUS",
                    BodyFIN = "TestActivityBody1FIN"
                },
                new Activity("TestActivity2ENG","TestActivity2EST","TestActivity2RUS","TestActivity2FIN","TestActivityBody2ENG","TestActivityBody2EST","TestActivityBody2RUS","TestActivityBody2FIN")
                {
                    TitleENG = "TestActivity2ENG",
                    TitleEST = "TestActivity2EST",
                    TitleRUS = "TestActivity2RUS",
                    TitleFIN = "TestActivity2FIN",
                    BodyENG = "TestActivityBody2ENG",
                    BodyEST = "TestActivityBody2EST",
                    BodyRUS = "TestActivityBody2RUS",
                    BodyFIN = "TestActivityBody2FIN"
                },
                new Activity("TestActivity3ENG","TestActivity3EST","TestActivity3RUS","TestActivity3FIN","TestActivityBody3ENG","TestActivityBody3EST","TestActivityBody3RUS","TestActivityBody3FIN")
                {
                    TitleENG = "TestActivity3ENG",
                    TitleEST = "TestActivity3EST",
                    TitleRUS = "TestActivity3RUS",
                    TitleFIN = "TestActivity3FIN",
                    BodyENG = "TestActivityBody3ENG",
                    BodyEST = "TestActivityBody3EST",
                    BodyRUS = "TestActivityBody3RUS",
                    BodyFIN = "TestActivityBody3FIN"
                },
                new Activity("TestActivity4ENG","TestActivity4EST","TestActivity4RUS","TestActivity4FIN","TestActivityBody4ENG","TestActivityBody4EST","TestActivityBody4RUS","TestActivityBody4FIN")
                {
                    TitleENG = "TestActivity4ENG",
                    TitleEST = "TestActivity4EST",
                    TitleRUS = "TestActivity4RUS",
                    TitleFIN = "TestActivity4FIN",
                    BodyENG = "TestActivityBody4ENG",
                    BodyEST = "TestActivityBody4EST",
                    BodyRUS = "TestActivityBody4RUS",
                    BodyFIN = "TestActivityBody4FIN"
                },
                new Activity("TestActivity5ENG","TestActivity5EST","TestActivity5RUS","TestActivity5FIN","TestActivityBody5ENG","TestActivityBody5EST","TestActivityBody5RUS","TestActivityBody5FIN")
                {
                    TitleENG = "TestActivity5ENG",
                    TitleEST = "TestActivity5EST",
                    TitleRUS = "TestActivity5RUS",
                    TitleFIN = "TestActivity5FIN",
                    BodyENG = "TestActivityBody5ENG",
                    BodyEST = "TestActivityBody5EST",
                    BodyRUS = "TestActivityBody5RUS",
                    BodyFIN = "TestActivityBody5FIN"
                },
                new Activity("TestActivity6ENG","TestActivity6EST","TestActivity6RUS","TestActivity6FIN","TestActivityBody6ENG","TestActivityBody6EST","TestActivityBody6RUS","TestActivityBody6FIN")
                {
                    TitleENG = "TestActivity6ENG",
                    TitleEST = "TestActivity6EST",
                    TitleRUS = "TestActivity6RUS",
                    TitleFIN = "TestActivity6FIN",
                    BodyENG = "TestActivityBody6ENG",
                    BodyEST = "TestActivityBody6EST",
                    BodyRUS = "TestActivityBody6RUS",
                    BodyFIN = "TestActivityBody6FIN"
                },
            };
            _context.Activities.AddRange(activities);
            _context.SaveChanges();
        }
    }
}