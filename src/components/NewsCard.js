import "../styles/NewsCard.css";
const NewsCard = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="https://images.unsplash.com/photo-1535074153497-b08c5aa9c236?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2aaf944a59f16fe1fe72f5057b3a7dd&auto=format&fit=crop&w=500&q=8"
                  alt="Card image cap"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="#">
                <img
                  className="card-img-top"
                  src="card-img-top"
                  src="https://images.unsplash.com/photo-1472076638602-b1f8b1ac0b4a?ixlib=rb-0.3.5&s=63c9de7246b535be56c8eaff9b87dd89&auto=format&fit=crop&w=500&q=80"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    accusantium ad alias, aliquid amet aspernatur atque culpa
                    cum debitis dicta doloremque, dolorum ea eos et excepturi
                    explicabo facilis harum illo impedit incidunt laborum
                    laudantium...{" "}
                  </p>
                  <p className="card-text">
                    <small class="text-muted">
                      <i class="fas fa-eye"></i>1000 <i class="far fa-user"></i>{" "}
                      admin <i class="fas fa-calendar-alt"></i>Jan 20, 2018{" "}
                    </small>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
