import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function LoadingDoc(props) {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    const code = {
        basic: `
<Button label="Submit" loading />
<Button label="Submit" iconPos="right" loading />
<Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
<Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
        `,
        javascript: `
import { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDoc() {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    return (
        <Button label="Submit" loading />
        <Button label="Submit" iconPos="right" loading />
        <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
        <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDoc() {
    const [loading1, setLoading1] = useState<boolean>(false);
    const [loading2, setLoading2] = useState<boolean>(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    return (
        <Button label="Submit" loading />
        <Button label="Submit" iconPos="right" loading />
        <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
        <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Loading on a button is specified with <i>loading</i> attribute and loading icon can be change with <i>loadingIcon</i> property. To display only a loading, leave label as undefined.
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Submit" loading />
                <Button label="Submit" iconPos="right" loading />
                <Button label="Submit" icon="pi pi-check" loading={loading1} onClick={onLoadingClick1} />
                <Button label="Submit" loading={loading2} onClick={onLoadingClick2} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
