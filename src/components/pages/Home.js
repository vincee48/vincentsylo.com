'use strict';

var React = require('react/addons');
var mui = require('material-ui');
var TextField = mui.TextField;
var List = mui.List;
var Paper = mui.Paper;
var FloatingActionButton = mui.FloatingActionButton;
var FontIcon = mui.FontIcon;
var Colors = mui.Styles.Colors;
var SkillSet = require('../SkillSet');
var Seam = require('../Seam');
var Chart = require('../DataChart');
var RaisedButton = mui.RaisedButton;
var $ = require('jquery');
var Dialog = mui.Dialog;

require('./Home.less');

var Home = React.createClass({

    getInitialState: function() {
        return {
            name: '',
            email: '',
            description: '',
            message: '',
            refresh: false
        };
    },
    handleScroll: function(e) {
        //console.log(e.currentTarget);
        // innerHeight = inner screenSize, scrollY = currentPos, outerHeight = screenSize
        var jumboEl = document.getElementById('jumbo-magic');
        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        var pct = ((e.currentTarget.scrollY / e.currentTarget.outerHeight) * 100) / height;

        /*
        if (pct >= .05) {
            jumboEl.className = 'mini';
        } else {
            jumboEl.className = '';
        }

        var header = document.getElementById('header-flexible');

        if (pct >= .05) {
            header.className = "Header move";
        } else {
            header.className = "Header";
        }*/

        var servicesEl = document.getElementsByClassName('service-item');
        for (var i = 0; i < servicesEl.length; i++) {
            if (pct >= 0.01) {
                servicesEl[i].className = 'service-item show';
            } else {
                servicesEl[i].className = 'service-item hide';
            }
        }
    },
    validateEmail: function (email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    },
    formSubmit: function(e) {
        e.preventDefault();

        var hasError = false;

        if (this.state.name.length === 0 || this.state.email.length === 0 || this.state.description.length === 0) {
            this.setState({
                message: 'There was an error with your request. All fields are required.',
                refresh: false
            });
            this.refs.notification.show();
            hasError = true;
        }

        if (!hasError && !this.validateEmail(this.state.email)) {
            this.setState({
                message: 'There was an error with your request. Your email is invalid.',
                refresh: false
            });
            this.refs.notification.show();
            hasError = true;
        }

        if (!hasError && grecaptcha.getResponse().length === 0) {
            this.setState({
                message: 'There was an error with your request. Please confirm that you\'re not a robot.',
                refresh: false
            });
            this.refs.notification.show();
            hasError = true;
        }

        if (!hasError) {
            $.ajax({
                type: 'POST',
                url: 'https://mandrillapp.com/api/1.0/messages/send.json',
                context: this,
                data: {
                    'key': 'jPZoSDIzhEW4cyGZ49lNLQ',
                    'message': {
                        'from_email': 'vincentsylo@gmail.com',
                        'to': [
                            {
                                'email': 'vincentsylo@gmail.com',
                                'type': 'to'
                            }
                        ],
                        'autotext': 'true',
                        'subject': 'New Proposal!',
                        'html': '<div>' +
                        '<p>Hi</p>' +
                        '<p>A new proposal has been submitted!</p>' +
                        '<p>Name: ' + this.state.name + '</p>' +
                        '<p>Email: ' + this.state.email + '</p>' +
                        '<p>Description: ' + this.state.description + '</p>' +
                        '</div>'
                    }
                }
            }).done(function (response) {
                if (response[0].status === 'sent') {
                    this.setState({
                        message: 'Thank you for your interest! I will reach out to you soon.',
                        refresh: true
                    });
                    this.refs.notification.show();
                } else {
                    this.setState({
                        message: 'There was an error with your request. Please try again.',
                        refresh: false
                    });
                    this.refs.notification.show();
                }
            });
        }
    },
    componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    onChangeName: function(e) {
        this.setState({
            name: e.target.value
        });
    },
    onChangeEmail: function(e) {
        this.setState({
            email: e.target.value
        });
    },
    onChangeDesc: function(e) {
        this.setState({
            description: e.target.value
        });
    },
    closeNotification: function(e) {
        this.refs.notification.dismiss();
        if (this.state.refresh) {
            window.location.href = '/';
        }
    },
    render: function () {
        var developer = {
            value: 70,
            color: Colors.amber500,
            highlight: Colors.amber300,
            label: 'Developer'
        };

        var designer = {
            value: 30,
            color: Colors.grey500,
            highlight: Colors.grey300,
            label: 'Designer'
        };

        var data = [developer, designer];

        return (
            <div className="Home">

                <Dialog
                    title="Contact Me"
                    actions={[{text: 'Close', onClick:this.closeNotification, ref:'close'}]}
                    modal={true}
                    ref="notification">
                    {this.state.message}
                </Dialog>

                <section id="jumbo">
                    <div className="container text-center">
                        <div className="row">
                            <div className="twelve columns" id="jumbo-magic">
                                <h1>Vincent Lo</h1>
                                <div className="tag-line">Developer</div>
                            </div>
                        </div>
                    </div>
                </section>

                <Seam iconClassName="mdi mdi-account" href="#about"/>

                <section id="about" className="panel">
                    <div className="container container-spacing">
                        <div className="row">
                            <div className="twelve columns">
                                <span className="title">About</span>
                                <hr/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns">
                                <p>
                                    I enjoy creating <strong>functional</strong> &amp; <strong>user-friendly</strong> websites and web applications for small businesses.
                                </p>
                                <p>
                                    With experience ranging from the development of <strong>software</strong>, <strong>web applications</strong> &amp; <strong>games</strong>, I have a strong passion for development &amp; design.
                                </p>
                            </div>
                            <div className="six columns">
                                <p>
                                    <Chart data={data} />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Seam iconClassName="mdi mdi-school" href="#services" />

                <section id="services" className="panel">
                    <div className="container container-spacing">
                        <div className="row">
                            <div className="four columns">
                                <div className="service-item">
                                    <SkillSet iconClassName="mdi mdi-console" title="Back End Development">
                                        <p className="text-center">
                                            PHP, Laravel, C#, ASP.NET, Java, Node.js, SQL, Salesforce
                                        </p>
                                    </SkillSet>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="service-item">
                                    <SkillSet iconClassName="mdi mdi-xml" title="Front End Development">
                                        <p className="text-center">
                                            HTML5, JavaScript, CSS3, jQuery, Bootstrap, React.js, Angular.js
                                        </p>
                                    </SkillSet>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="service-item">
                                    <SkillSet iconClassName="mdi mdi-laptop" title="Design &amp; Game Development">
                                        <p className="text-center">
                                            Unity3D, 3DS Max, Adobe Illustrator, Adobe Photoshop
                                        </p>
                                    </SkillSet>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Seam iconClassName="mdi mdi-phone" href="#contact" />

                <section id="contact" className="panel">
                    <form>
                        <div className="container container-spacing">
                            <div className="row">
                                <div className="twelve columns">
                                    <span className="title">Contact Me</span>
                                    <hr/>
                                    <p>
                                        Interested in working together? Please fill out the following form and I will get back to you as soon as I can.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="six columns">
                                    <TextField floatingLabelText="Name" fullWidth={true} hintText="Enter your name" onChange={this.onChangeName} />
                                </div>
                                <div className="six columns">
                                    <TextField floatingLabelText="Email" fullWidth={true} hintText="Enter your email" onChange={this.onChangeEmail} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="twelve columns">
                                    <TextField multiLine={true} floatingLabelText="Description" fullWidth={true} hintText="Enter a description of the project" onChange={this.onChangeDesc} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="twelve columns">
                                    <div className="margin-center g-recaptcha" data-sitekey="6LdCxwgTAAAAAK-Cwcv0ZBmvtEs7RKvo8_8rxgy7"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="twelve columns text-center">
                                    <RaisedButton label="Submit" onClick={this.formSubmit} />
                                </div>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        );
    }
});

module.exports = Home;

