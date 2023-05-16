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
    fetch("http://127.0.0.1:3001/api/category")
      .then((response) => {
        return response.json();
      })

      .then((result) => {
        this.setState({
          categories: result.data,
        });
      })
      .catch((error) => {
        console.error(error);
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
