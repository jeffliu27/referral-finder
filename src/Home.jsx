/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Navbar, NavItem, Icon, Input, Autocomplete, Button } from 'react-materialize';
import { Image } from 'semantic-ui-react';
// import { Form, FormGroup, FormControl, Col, Button } from 'react-bootstrap';
import TableContent from './API/TableContent';
import './css/general.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {API} from 'aws-amplify';

const companyData = {
    'Apple': null,
    'Microsoft': null,
    'Google': null,
    'Facebook': null,
    'IBM': null
}

const jobData = {
    'Software Developer': null,
    'Software Engineer': null,
    'Quality Assurance': null,
    'QA': null,
    'Full Stack Developer': null,
    'Frontend Developer': null,
    'Backend Developer': null,
    'Cloud Engineer': null
}

export default class Home extends Component {

    constructor(){
        super();

        this.state = {
            data:[],
            company: '',
            job: '',
            loading: null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const title = target.title;
        const name = target.name;
        const id = target.id;

        console.log("event ", event);
        console.log("target ", target);
        console.log( "value " + value + " name " + title + "id " );

        this.setState({
        [name]: value
        });
    }

    handleSubmit(event) {

        this.setState(() => {
            return {
                loading: true
            }
        });

        console.log("submitting...");
    }

    // fetch = async () => {
    //     this.setState(() => {
    //         return {
    //             loading: true
    //         }
    //     });

    //     API.get('ReactSample','/items/restaurants')
    //         .then(resp => {
    //             this.setState({
    //                 data: resp,
    //                 loading: false
    //             });
    //         })
    //         .catch (err => console.log(err))
    // }

    render() {
        console.log('data:' + JSON.stringify(this.state.data));
        console.log(this.state);
        return (
            <CSSTransitionGroup
            transitionName="sample-app"
            transitionEnterTimeout={500}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionEnter={true}
            transitionLeave={true}>
            <div className="content">
                <h4>Please enter the company and job position that you are looking for</h4>
                <div>
                    <Row>
                        {/*<Autocomplete s={10} title='Company Name' name='company' value={this.state.company} onChange={this.handleInputChange} data={companyData}></Autocomplete>
                        <Autocomplete s={10} title='Job Position' name='job' value={this.state.job} onChange={this.handleInputChange} data={jobData}></Autocomplete>*/}
                        <Input s={5} label="Company Name" onChange={this.handleInputChange} name='company' value={this.state.company} validate><Icon>location_city</Icon></Input>
                        <Input s={5} label="Job Position" onChange={this.handleInputChange} name='job' value={this.state.job} validate><Icon>business_center</Icon></Input>
                    </Row>    
                </div>

                <div className="content-button">
                    <Button className="blue darken-2" floating icon='search' waves='teal' 
                    onClick={this.handleSubmit}
                    ></Button>
                    {/*<Button primary onClick={this.fetch}>
                        List Restaurants
                    </Button>
                    <Button primary onClick={this.initRestaurant}>
                        Insert Restaurants
                    </Button>*/}
                </div>
                {/*<TableContent tableData={this.state.data} loading={this.state.loading} />*/}
            </div>
            </CSSTransitionGroup>
        );
    }
}

                // {/*<Button className="search-button" floating icon='search' waves='light' large onClick={this.handleSubmit}></Button>*/}
                // {/*<button style="font-size:24px">List Referrals</button>*/}