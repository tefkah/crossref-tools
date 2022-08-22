import { xastXsdToTs } from './xast-xsd-to-ts'

const minimalXSD = `<?xml version = "1.0"?>

<xs:schema xmlns:xs = "http://www.w3.org/2001/XMLSchema"
   targetNamespace = "http://www.tutorialspoint.com"
   xmlns = "http://www.tutorialspoint.com"
   elementFormDefault = "qualified">

   <xs:element name = 'class'>
      <xs:complexType>
         <xs:sequence>
            <xs:element name = 'student' type = 'StudentType' minOccurs = '0'
               maxOccurs = 'unbounded' />
         </xs:sequence>
      </xs:complexType>
   </xs:element>

   <xs:complexType name = "StudentType">
      <xs:sequence>
         <xs:element name = "firstname" type = "xs:string"/>
         <xs:element name = "lastname" type = "xs:string"/>
         <xs:element name = "nickname" type = "xs:string"/>
         <xs:element name = "marks" type = "xs:positiveInteger"/>
      </xs:sequence>
      <xs:attribute name = 'rollno' type = 'xs:positiveInteger'/>
   </xs:complexType>

</xs:schema>`

describe('xastXsdToTs', () => {
  it('should read strings', async () => {
    expect(await xastXsdToTs(minimalXSD)).not.toThrow()
  })
  it('should read urls', async () => {
    expect(await xastXsdToTs('https://data.crossref.org/schemas/crossref5.3.1.xsd')).not.toThrow()
  })

  it('should read relative paths', async () => {
    expect(await xastXsdToTs('../fixtures/minimal.xsd')).not.toThrow()
  })

  it('should read absolute paths', async () => {
    expect(
      await xastXsdToTs(
        '/Volumes/SSD/Projects/crossref-tools/packages/xast-xsd-to-ts/src/fixtures/minimal.xsd',
      ),
    ).not.toThrow()
  })
})
