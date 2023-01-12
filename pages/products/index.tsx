import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Card from "../../src/components/products/Card";
import { productItems } from "../../src/__mocks__/productsItems";
import { IProduct } from "../../src/types/product";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";

function Products() {
  const { status, data: productsList, error } = useQuery("fetchProducts", () => productItems);
  const [descProductsList, setDescProductsList] = useState<Array<IProduct>>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const perPage = 5;
  const offset = (page - 1) * perPage;

  React.useEffect(() => {
    if (productsList !== undefined) {
      setDescProductsList(productsList.sort((a, b) => b.score - a.score).slice(offset, offset + perPage));
      setTotalPage(Math.ceil(productsList.length / perPage));
    }
  }, [productsList, page]);

  if (status === "loading") {
    return <span>로딩 중 입니다.</span>;
  }

  if (status === "error") {
    return <span>에러가 발생했습니다.</span>;
  }

  const handlePageChange = (event: any) => {
    setPage(event.selected + 1);
  };

  return (
    <>
      <Head>
        <title>Shop || Products</title>
        <meta name="description" content="Shop Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          {descProductsList &&
            descProductsList.map((item: IProduct) => (
              <Card
                key={item.item_no}
                item_no={item.item_no}
                item_name={item.item_name}
                detail_image_url={item.detail_image_url}
                price={item.price}
                score={item.score}
                availableCoupon={item.availableCoupon}
              />
            ))}
        </Wrapper>
      </main>
      <footer>
        <Pagination
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageChange}
          pageRangeDisplayed={perPage}
          pageCount={totalPage}
          previousLabel="<"
        />
      </footer>
    </>
  );
}

const Wrapper = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const Pagination = styled(ReactPaginate)`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-bottom: 60px;
  font-size: 20px;

  li {
    cursor: pointer;
  }

  .selected {
    color: ${(props) => props.theme.color.primary[300]};
    font-size: 24px;
    font-weight: 700;
  }
`;

export default Products;
