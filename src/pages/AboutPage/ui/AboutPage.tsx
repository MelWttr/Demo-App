import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('About');

    return (
        <div>
            {t('About')}
        </div>
    );
};

export default AboutPage;
