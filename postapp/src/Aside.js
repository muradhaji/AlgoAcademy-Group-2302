import './Aside.css';

function Aside(props) {
  const { collapsed } = props;

  return (
    <aside className={collapsed ? 'collapsed' : ''}>
      <nav>
        <a href='/'>Home</a>
        <a href='/posts'>Posts</a>
        <a href='/users'>Users</a>
      </nav>
    </aside>
  );
}

export default Aside;
