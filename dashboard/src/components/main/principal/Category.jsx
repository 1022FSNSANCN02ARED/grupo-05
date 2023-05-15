import React, { Component } from "react";
import BigCard from "./components/BigCard";
import CategoryItem from "./components/CategoryItem";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:3001/api/category" /* , {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    } */
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result.data);
        this.setState({
          categories: result.data,
        });
      });
  }

  render() {
    return (
      <BigCard title="Categorías">
        <div className="row">
          {this.state.categories.length === 0
            ? "Cargando..."
            : this.state.categories.map((category) => {
                return <CategoryItem key={category.id} name={category.name} />;
              })}
        </div>
      </BigCard>
    );
  }
}

export default CategoryList;
