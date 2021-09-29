import Navbar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import Loading from "./components/Loading";
import { request } from "./util/api";

export default function App($target) {
  this.state = {
    categorys: [
      { id: 1, category: "all", title: "전체보기" },
      { id: 2, category: "business", title: "비즈니스" },
      { id: 3, category: "technology", title: "기술" },
      { id: 4, category: "entertainment", title: "연예" },
    ],
    selectCategory: "all",
    articles: [],
    isLoading: true,
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

  const loading = new Loading({
    $target,
    initialState: this.state.isLoading,
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
    loading.setState({
      isLoading: this.state.isLoading,
    });
  };

  const init = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    const getData = await request("all");
    this.setState({
      ...this.state,
      articles: getData,
      isLoading: false,
    });
  };

  init();
}
