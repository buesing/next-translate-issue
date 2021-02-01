import useTranslation from 'next-translate/useTranslation'

export default props => {
  console.log(props.__namespaces)
  const { t } = useTranslation('common')
  return <div>{t('some-test-string')}</div>
}
