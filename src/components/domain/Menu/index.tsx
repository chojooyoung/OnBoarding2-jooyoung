// import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
function Menu() {
  return (
    <Nav className="bg-sky-700">
      <MenuWrapper>
        <MenuList className="hover:bg-sky-300">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </MenuList>
        <MenuList className="hover:bg-sky-300">
          <Link to="/posts" style={{ textDecoration: "none", color: "white" }}>
            Posts
          </Link>
        </MenuList>
        <MenuList className="hover:bg-sky-300">
          <Link
            to="/write/new"
            style={{ textDecoration: "none", color: "white" }}
          >
            Write
          </Link>
        </MenuList>
      </MenuWrapper>
    </Nav>
  );
}
const Nav = styled.nav([
  tw`
w-full
h-full
p-0`,
]);
// `
//   width: 100%;
//   height: 100%;
//   padding: 0;
//   background-color: #486ba2;
// `;
const MenuWrapper = styled.ul([
  tw`
    mt-0
    mb-5
    flex
  `,
]);

// `
//   margin-top: 0;
//   margin-bottom: 20px;
//   text-decoration: none;
//   display: flex;
// `
const MenuList = styled.li([
  tw`
  text-gray-400
  text-3xl
  list-none	
  p-2
  `,
]);

// `
//   color: gray;
//   font-size: 30px;
//   list-style: none;
//   padding: 10px;

//   :hover {
//     background-color: #d9daee;
//     opacity: 0.3;
//   }
// `;
export default Menu;
