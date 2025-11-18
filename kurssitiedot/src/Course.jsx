const Header = ({ course }) => (
  <div>
    <h1>{course.name}</h1>
    <ul>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <h2>
        total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)}{" "}
        exercises
      </h2>
    </ul>
  </div>
);

const Course = ({ course }) => (
  <div>
    <Header course={course} />
  </div>
);

export default Course;
