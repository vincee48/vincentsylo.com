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
        var jumboEl = document.getElementById('jumbo-magic');
        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        var pct = ((e.currentTarget.scrollY / e.currentTarget.outerHeight) * 100) / height;

        var servicesEl = document.getElementsByClassName('service-item');
        for (var i = 0; i < servicesEl.length; i++) {
            if (pct >= 0.01) {
                servicesEl[i].className = 'service-item show';
            } else {
                servicesEl[i].className = 'service-item hide';
            }
        }
    },
    componentDidMount: function() {
        window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    render: function () {
        var developer = {
            value: 70,
            color: Colors.amber500,
            highlight: Colors.amber300,
            label: 'Front-end (Web / Mobile)'
        };

        var designer = {
            value: 30,
            color: Colors.grey500,
            highlight: Colors.grey300,
            label: 'Back-end'
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
                                <div className="tag-line">Software Engineer</div>
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
                                    <SkillSet iconClassName="mdi mdi-xml" title="Front End Development">
                                        <p className="text-center">
                                            React Native, HTML, JavaScript (ES2015+, React.js, Redux, jQuery, Angular), CSS (PostCSS, CSS Modules, Responsive, LESS/SASS, Boostrap)
                                        </p>
                                    </SkillSet>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="service-item">
                                    <SkillSet iconClassName="mdi mdi-console" title="Back End Development">
                                        <p className="text-center">
                                            JavaScript (Node.js), PHP, Laravel, C#, ASP.NET, PostgresSQL, MySQL, Salesforce
                                        </p>
                                    </SkillSet>
                                </div>
                            </div>
                            <div className="four columns">
                                <div className="service-item">
                                    <SkillSet iconClassName="mdi mdi-laptop" title="Design &amp; Game Development">
                                        <p className="text-center">
                                            Unity3D, 3DS Max, Affinity Designer, Adobe Illustrator, Adobe Photoshop
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
                                        Interested in working together? Connect with me on <a href="//au.linkedin.com/in/vincentsylo">LinkedIn</a>!
                                    </p>
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

