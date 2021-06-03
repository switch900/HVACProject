import axios from 'axios'

export default {
    getData: () =>
        axios({
            'method': 'GET',
            'url': 'https://localhost:44349/api/HVACEquipments',
            'headers': {
                'content-type': 'application/json'
            },
            'params': {
                'search': 'parameter',
            },
        })
}