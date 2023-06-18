import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AboutPage = () => {
    const { t } = useTranslation('About');

    return (
        <Page>
            {t('About')}
        </Page>
    );
};

export default AboutPage;
