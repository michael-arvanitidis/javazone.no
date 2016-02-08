import { connect } from 'react-redux';
import { store } from '../store';
import { getWorkshops } from '../actions/workshops';
import header from '../assets/header_expo.jpg';

const headerStyle = {
    backgroundImage: `url('${header}')`
};

function mapStateToProps(state) {
    return {
        workshops: state.workshops.workshops
    };
}

const Kids = React.createClass({
    componentWillMount() {
        this.props.getWorkshops();
    },

    render() {
        return (
            <div className='page kids'>
                <div className='page__header page__header-centered' style={headerStyle}>
                    <h1 className='page__title'>JavaZone Kids</h1>
                </div>

                <div className='textblock textblock--centered'>
                    <div className='textblock--centered__text'>
                        <h2 className='textblock__title'>A taste of JavaZone for young, aspiring developers</h2>
                        <p>
                            Kids
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect(mapStateToProps, { getWorkshops })(Kids);
