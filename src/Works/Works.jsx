import "./works.css";

export default function Works() {
  return (
    <div className="home">
      <div className="imgContainer">
        <a href="https://github.com/KalebStafford/bookSearchEngine">
          <img
            src="/BookSearchEngine.PNG"
            alt=""
            className="bookSearchEngine"
          />
        </a>
        <a href="https://github.com/KalebStafford/PWA-budgetTracker">
          <img src="/BudgetTracker.PNG" alt="" className="budgetTracker" />
        </a>
        <a href="https://github.com/KalebStafford/workDayScheduler">
          <img src="/WeatherApp.PNG" alt="" className="weatherApp" />
        </a>
      </div>
    </div>
  );
}
