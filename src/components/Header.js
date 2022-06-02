import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <Header>
        <h1 style={{color: 'red', backgroundColor:'black' }}>{title}</h1>
    </Header>
  )
}
Header.defaultprops={

  title: 'Task Tracker',
}

Header:PropTypes={
  title: PropTypes.string.isRequired,
}

const headingStyle{

  color: 'red', backgroundColor:'black' 
}

export default Header