import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/button/importdoc';
import { BasicDoc } from '../../components/doc/button/basicdoc';
import { IconsDoc } from '../../components/doc/button/iconsdoc';
import { LoadingDoc } from '../../components/doc/button/loadingdoc';
import { SeveritiesDoc } from '../../components/doc/button/severitiesdoc';
import { RaisedButtonsDoc } from '../../components/doc/button/raisedbuttonsdoc';
import { RoundedButtonsDoc } from '../../components/doc/button/roundedbuttonsdoc';
import { TextButtonsDoc } from '../../components/doc/button/textdoc';
import { RaisedTextButtonsDoc } from '../../components/doc/button/raisedtextdoc';
import { OutlinedButtonsDoc } from '../../components/doc/button/outlinedbuttonsdoc';
import { RoundedIconButtonsDoc } from '../../components/doc/button/roundedicondoc';
import { RoundedTextIconButtonsDoc } from '../../components/doc/button/roundedtextdoc';
import { RoundedOutlinedButtonsDoc } from '../../components/doc/button/roundedoutlineddoc';
import { BadgesDoc } from '../../components/doc/button/badgesdoc';
import { ButtonSetDoc } from '../../components/doc/button/buttonsetdoc';
import { SizesDoc } from '../../components/doc/button/sizesdoc';
import { TemplateDoc } from '../../components/doc/button/templatedoc';

const ButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'severities',
            label: 'Severities',
            component: SeveritiesDoc
        },
        {
            id: 'raised',
            label: 'Raised Buttons',
            component: RaisedButtonsDoc
        },
        {
            id: 'rounded',
            label: 'Rounded Buttons',
            component: RoundedButtonsDoc
        },
        {
            id: 'text',
            label: 'Text Buttons',
            component: TextButtonsDoc
        },
        {
            id: 'raisedtext',
            label: 'Raised Text Buttons',
            component: RaisedTextButtonsDoc
        },
        {
            id: 'outlined',
            label: 'Outlined Buttons',
            component: OutlinedButtonsDoc
        },
        {
            id: 'roundedicon',
            label: 'Rounded Icon Buttons',
            component: RoundedIconButtonsDoc
        },
        {
            id: 'roundedtexticon',
            label: 'Rounded Text Icon Buttons',
            component: RoundedTextIconButtonsDoc
        },
        {
            id: 'roundedoutlined',
            label: 'Rounded and Outlined Icon Buttons',
            component: RoundedOutlinedButtonsDoc
        },
        {
            id: 'badges',
            label: 'Badges',
            component: BadgesDoc
        },
        {
            id: 'buttonset',
            label: 'Button Set',
            component: ButtonSetDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Button Component</title>
                <meta name="description" content="Button is an extension to standard input element with icons and theming." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Button</h1>
                    <p>Button is an extension to standard input element with icons and theming.</p>
                </div>

                <DocActions github="button/index.js" />
            </div>
            <div className="content-section doc button-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ButtonDemo;
