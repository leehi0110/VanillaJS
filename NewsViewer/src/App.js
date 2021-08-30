import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import { request } from "./util/api";

export default function App($target) {
  this.state = {
    categorys: [
      { category: "all", title: "전체보기" },
      { category: "business", title: "비즈니스" },
      { category: "technology", title: "기술" },
      { category: "entertainment", title: "연예" },
    ],
    selectCategory: "all",
    articles: [],
  };

  const navbar = new Navbar({
    $target,
    initialState: {
      categorys: this.state.categorys,
      selectCategory: this.state.selectCategory,
    },
    changeCategory: async (category) => {
      const selecedArticles = await request(category);
      this.setState({
        ...this.state,
        selectCategory: category,
        articles: selecedArticles,
      });
    },
  });

  const articleList = new ArticleList({
    $target,
    initialState: {
      articles: this.state.articles,
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    navbar.setState({
      categorys: this.state.categorys,
      selectCategory: this.state.selectCategory,
    });
    articleList.setState({
      articles: this.state.articles,
    });
  };

  const init = async () => {
    const getData = await request("all");
    this.setState({
      ...this.state,
      articles: getData,
    });
  };

  init();
}
