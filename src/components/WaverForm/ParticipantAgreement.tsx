import React from 'react';
import {
  StyleScrollView,
  StyleText,
} from '../../utils/TailwindAndUIkiteCombination';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const ParticipantAgreement = () => {
  return (
    <StyleScrollView
      style={{maxHeight: height / 3, marginVertical: 20, borderBottomWidth: 1}}
      nestedScrollEnabled={true}>
      <StyleText category="label" className="text-lg">
        Participant Agreement, Release and Assumption of Risk (The Agreement) -
        Skyjumper Trampoline Park
      </StyleText>
      <StyleText className="mt-2">
        Participant Agreement, Release and Assumption of Risk (The Agreement) -
        Skyjumper Trampoline Park I have voluntarily elected to use and, if
        applicable, to allow the minor child(ren) identified above and all minor
        children under my supervision and referred to individually and
        collectively herein as "Child", to use the Skyjumper Trampoline Park
        facilities and equipment located at following centers (the "Skyjumper
        Trampoline Park Facility"):
      </StyleText>
      <StyleText className="mt-2">
        i) GX 14-35, ILD Trade center, Sohna Road, Sector-47, Gurugram, Haryana
        122018 ii) Adventure Island, Sector-10, Rohini, North West Delhi,
        Delhi-110085 iii) 4-S-01 & 02, Fountain House, Level-2, Creaticity,
        Shastri Nagar, Yerwada, Pune, MH-411006 iv) CP-3A, Malhaur Railway
        Station Road, Vikalp Khand, Gomti Nagar, Lucknow -226010 v) Front Anchor
        Shop, 4th Floor Grand Square Mall, 137, Velachery - Tambaram Main Rd,
        Velachery, Chennai, Tamil Nadu 600042 vi) Block-3, Oxford Street,
        Zirakpur, Punjab 140603 vii) Spectrum Metro Mall, LGF Atrim, Sector 75,
        Noida, Uttar Pradesh 201301 viii) 6th Floor, Garuda Mall, Magrath Rd,
        Ashok Nagar, Bengaluru, Karnataka 560025 ix) 5th Floor, TRP Mall,
        Rajyash City, Bopal, Ahmedabad, Gujarat 380058 x) G Floor, 1st Floor,
        TDS Tower, 120 Feet Road, Guru Teg Bahadur Nagar, Jalandhar, Punjab
        144003 xi) Shop No. 311-313, 2nd Floor, Plot No. 1-2, MODI MALL,
        Sector-25A, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301
      </StyleText>
      <StyleText className="mt-2">
        In consideration for being allowed to use said facilities and equipment,
        and any other services provided by SkyJumper Sports and Amusements Pvt
        Ltd or its employees or agents at said location, or any other location
        within the State of Haryana, I represent, acknowledge and agree as
        follows:
      </StyleText>
      <StyleText className="text-base mt-4">GENERAL RELEASE</StyleText>
      <StyleText className="mt-2">
        From the date of signing and for all future visits of myself and my
        "Child", I acknowledge and agree that this Agreement covers and is
        intended to release and provide other benefits, legal protections, and
        consideration to Skyjumper Sports and Amusement Pvt Ltd, and their
        respective and collective agents, owners, officers, managers,
        shareholders, affiliates, volunteers, participants, employees, and all
        other persons or entities acting in any capacity on their respective or
        collective behalf.
      </StyleText>
      <StyleText className="text-base mt-4">
        RELEASE OF POTENTIAL INJURIES
      </StyleText>
      <StyleText className="mt-2">
        I acknowledge and agree that the use of trampolines and the other
        equipment at the Skyjumper Trampoline Park Facility and that
        participating in trampoline and other activities is inherently and
        obviously dangerous. These risks include serious physical or emotional
        injury, paralysis, death, damage to myself, the Child, and/or third
        parties, and damage to personal property of any or all such persons. I
        understand that such risks simply cannot be eliminated without
        jeopardizing the essential qualities of the activity, which I further
        agree is for recreational purposes and completely voluntary. I
        acknowledge and agree that, while the trampoline and other activities
        that take place at the Skyjumper Trampoline Park are monitored generally
        by Skyjumper Trampoline Park employees, it is not feasible for such
        employees to monitor the activities and actions of all customers at all
        times or all customers simultaneously. Furthermore, SkyJumper employees
        have difficult jobs to perform. They seek safety, but they are not
        infallible. They might be unaware of a participant's health or
        abilities. They may give incomplete warnings or instructions, and the
        equipment being used might malfunction.
      </StyleText>
      <StyleText className="text-base mt-4">
        VOLUNTARY ASSUMPTION OF RISK
      </StyleText>
      <StyleText className="mt-2">
        I acknowledge and agree that I and the Child are participating
        voluntarily at our own risk. I acknowledge and agree that the actions or
        activities of other customers or the actions or inactions of Skyjumper
        Trampoline Park employees could cause me or the Child significant bodily
        injury (as described in this Agreement), and that Skyjumper Trampoline
        Park is not responsible for the actions or activities of customers using
        the Skyjumper Trampoline Park or the negligence of its employees in
        supervising the Skyjumper Trampoline Park or its usage, including
        actions, activities, or omissions that result in such harm. Some of the
        risks include, but are not limited to, the following: a) Participants
        may die or become paralyzed, partially or fully, through their use of
        the Skyjumper Trampoline Park and participation in Skyjumper Trampoline
        Park. b) Participants may suffer cuts, scrapes, bumps, bruises, the
        transmission of disease strains and allergic reactions through use of
        the Skyjumper Trampoline Park equipment or contact with other
        participants or surfaces they have contacted. Participants may sprain,
        pull, break or otherwise seriously externally or internally injure their
        head, face (including nose and teeth/jaw), neck, torso, spine, arms,
        wrists, hands, legs, ankles, feet or other body parts as a result of
        falling off the trampoline(s) or other equipment, landing improperly on
        the trampolines or other equipment, or making contact with other
        participants. As noted in paragraph a) above, such injuries can lead to
        paralysis, disfigurement or death. Participation may result in heat
        stroke, heart attacks, dehydration and other exertion-related medical
        events. c) Participants may fall on each other, resulting in broken
        bones and other serious injuries. Double bouncing, more than one person
        per trampoline, flipping, running and bouncing off of the walls and
        wall-mounted trampolines, and other participant body movements (whether
        planned or unplanned) can create a rebound effect and lead to
        unpredictable body movements and anticipated or unanticipated bodily
        contact, any or all of which can lead to serious injury. d) Traveling to
        and from trampolines can result in similar physical injury (even if the
        participant is not himself or herself bouncing at the time). e)
        Observing, standing, sitting or taking photographs at or near any
        trampoline or activity can result in similar physical injury (even if
        the observer is not himself or herself participating at the time).
      </StyleText>
      <StyleText className="text-base mt-4">
        AGREEMENT TO PAY MY OWN MEDICAL EXPENSES
      </StyleText>
      <StyleText className="mt-2">
        I acknowledge, accept, and assume the risk of any and all medical
        conditions, limitations, or disabilities (whether temporary or
        permanent) that I or the Child possess, whether known or unknown, which
        might contribute to or exacerbate any injury I or the Child might
        sustain as a result of using the Skyjumper Trampoline Park or any of its
        equipment. I acknowledge and agree that if medical assistance (of any
        form, including emergency care, hospitalization, out-patient care,
        and/or physical therapy) is required or performed as a result of any
        injury I or the Child sustains while using the Skyjumper Trampoline
        Park, such assistance shall be at my own expense.
      </StyleText>
      <StyleText className="text-base mt-4">RELEASE OF LIABILITY</StyleText>
      <StyleText className="mt-2">
        The Releasing Parties hereby forever, irrevocably and unconditionally
        release, waive, relinquish, discharge from liability and covenant not to
        sue Skyjumper Sports and Amusement Pvt Ltd, and their successors,
        predecessors-in-interest, and insurers from any and all claims, demands,
        rights, actions, suits, causes of action, obligations, debts, costs,
        losses, charges, expenses, attorneys' fees, damages, judgments and
        liabilities, of whatever kind or nature, in law, equity or otherwise,
        whether now known or unknown, suspected or unsuspected, and whether or
        not concealed or hidden, related to or arising, directly or indirectly,
        from my or the Child's access to and/or use of the Skyjumper Trampoline
        Park, premises and/or its equipment (whether trampolines or otherwise),
        the Child's and/or my entry into the Skyjumper Trampoline Park, the
        condition, maintenance, inspection, supervision, control or security of
        the Skyjumper Trampoline Park, the failure to warn of dangerous
        conditions in connection with the Skyjumper Trampoline Park, and/or the
        acts or omissions of Skyjumper Sports and Amusement Pvt Ltd, including,
        without limitation, any claim for negligence, failure to warn or other
        omission, property damage, personal injury, emotional injury, illness,
        bodily harm, paralysis or death. I understand that this release and
        waiver applies not only to use of the trampolines, but also all other
        equipment, and all activities and games at the Skyjumper Trampoline
        Park. I understand that this release and waiver applies to and includes
        all activities that I or my Child engage in at the premises, whether
        inside or outside the Skyjumper Trampoline Park. In the event that any
        claim released herein is brought by, or asserted on behalf of, the
        Releasing Parties, I shall immediately defend, indemnify and hold
        harmless the Releasees, and any of them, from any loss or liability,
        including reasonable attorneys' fees, associated therewith or arising
        therefrom.
      </StyleText>
      <StyleText className="text-base mt-4">
        ARBITRATION OF DISPUTES; TIME LIMIT TO BRING CLAIM
      </StyleText>
      <StyleText className="mt-2">
        I understand that by agreeing to arbitrate any dispute as set forth in
        this section, I am waiving my right, and the right(s) of the minor
        child(ren) above, to maintain a lawsuit against Skyjumper Sports and
        Amusement Pvt Ltd for any and all claims covered by this Agreement. By
        agreeing to arbitrate, I understand that I will NOT have the right to
        have my claim determined by a jury, and the minor child(ren) above will
        NOT have the right to have claim(s) determined by a jury. Reciprocally,
        SkyJumper and the other Releasees waive their right to maintain a
        lawsuit against me and the minor child(ren) above for any and all claims
        covered by this Agreement, and they will not have the right to have
        their claim(s) determined by a jury. ANY DISPUTE, CLAIM OR CONTROVERSY
        ARISING OUT OF OR RELATING TO MY OR THE CHILD'S ACCESS TO AND/OR USE OF
        THE SKYJUMPER PREMISES AND/OR ITS EQUIPMENT, INCLUDING THE DETERMINATION
        OF THE SCOPE OR APPLICABILITY OF THIS AGREEMENT TO ARBITRATE, SHALL BE
        BROUGHT WITHIN ONE YEAR OF ITS ACCRUAL (i.e., the date of the alleged
        injury) AND BE DETERMINED BY ARBITRATION IN THE COUNTY OF THE SKYJUMPER
        TRAMPOLINE PARK, FARIDABAD HARYANA, INDIA BEFORE ONE ARBITRATOR. THE
        ARBITRATION SHALL BE ADMINISTERED BY ARBITRATION AND CONCILIATION ACT.
        1991. JUDGMENT ON THE AWARD MAY BE ENTERED IN ANY COURT HAVING
        JURISDICTION. THIS CLAUSE SHALL NOT PRECLUDE PARTIES FROM SEEKING
        PROVISIONAL REMEDIES IN AID OF ARBITRATION FROM A COURT OF APPROPRIATE
        JURISDICTION. This Agreement shall be governed by, construed and
        interpreted in accordance with the laws of the India, without regard to
        choice of law principles. Notwithstanding the provision with respect to
        the applicable substantive law, any arbitration conducted pursuant to
        the terms of this Agreement shall be governed by Arbitration and
        Conciliation Act.1991.
      </StyleText>
      <StyleText className="text-base mt-4">
        PHOTO/VIDEO/SOCIAL MEDIA WAIVER
      </StyleText>
      <StyleText className="mt-2">
        In connection with my and the Child's use of the Skyjumper Trampoline
        Park, I consent to the recording of the Child's and my physical likeness
        and/or voice through mechanical, photographic, technical, digital,
        electronic or other means ("Recordings"). I hereby consent to and
        authorize Skyjumper Sports and Amusement Pvt Ltd and its agents,
        representatives, employees, successors and assigns to use, in
        perpetuity, such Recordings, as well as the Child's name and my name,
        for any purpose, including advertising, promoting, exploiting and/or
        publicizing any Skyjumper Trampoline Park. I further agree that the
        foregoing includes the consent to use the Child's and/or my physical
        likeness in any form. In addition, I waive any and all claims I may have
        in connection with the Recordings.
      </StyleText>

      <StyleText className="text-base mt-4">TERM OF AGREEMENT</StyleText>
      <StyleText className="mt-2">
        I understand that this agreement extends forever into the future and
        will have full force and legal effect each and every time I or my
        child(ren)/ward(s) visit SkyJumper, whether at the current location or
        any other location or facility. SAFETY IS MY RESPONSIBILITY: I AND EACH
        CHILD AGREE TO FOLLOW THE CODE OF PATRON RESPONSIBILITY: a) I
        acknowledge that there are inherent risks in the participation in or on
        any trampoline court, and that such risks include not only the use of
        trampolines, but other activities and equipment. Patrons of a trampoline
        court who use trampolines, and those who engage in any other activities
        or use any other equipment, by participation, accept the risks inherent
        in such participation of which the ordinary prudent person is or should
        be aware. Patrons have a duty to exercise good judgment and act in a
        responsible manner while using the trampoline court and other equipment,
        and while engaging in such activities. Patrons have a duty to obey all
        oral or written warnings, or both, prior to or during participation, or
        both. b) I have a duty to not participate in any activity on any
        trampoline court, or engage in any other activity or use any other
        equipment, when under the influence of drugs or alcohol. c) I have a
        duty to properly use all safety equipment provided, whether for the
        trampolines at the trampoline court, or otherwise. d) I have a duty to
        not participate in any activity on any trampoline court, or engage in
        other activities or use other equipment, if I have pre-existing medical
        conditions, circulatory conditions, heart or lung conditions, recent
        surgeries, back or neck conditions, knee or ankle conditions, high blood
        pressure, known pregnancy, any history of spine, musculoskeletal or head
        injuries, or if you may be pregnant. e) I have a duty to remove
        inappropriate attire including hard, sharp or dangerous objects such as
        buckles, pens, purses, badges and so forth. f) I have a duty to avoid
        bodily contact with other patrons. g) I have a duty to conform with or
        meet height, weight or age restrictions imposed by the manufacturer or
        owner to use or participate in any trampoline park activity, whether
        involving the use of trampolines, or otherwise. h) I have a duty to
        avoid crowding or overloading individual sections of the trampoline
        court, or other equipment. i) I have a duty to use the trampoline court,
        and other equipment, within your own limitations, training and acquired
        skills. j) I have a duty to avoid landing on the head or neck. Serious
        injuries, paralysis or death can occur when landing on the trampoline
        court bed, or elsewhere, whether involving the trampoline, other
        equipment, or otherwise. k) I also agree to follow and obey all posted
        and stated warnings and patron education signs. l) I agree to explain
        all safety rules to each Child you accompany, and to ensure that each
        Child obeys the safety rules.
      </StyleText>
      <StyleText className="mt-2">
        would like to receive email promotions, discounts, and other
        advertisements from SkyJumper and its partners at the email address
        provided below. I may unsubscribe at any time.
      </StyleText>
      <StyleText className="mt-2">
        I have had sufficient opportunity to read this document. I have read and
        understood and agree to be bound by its terms. I understand that
        employees working at the Skyjumper Trampoline Park, including the
        manager, do not have the authority to waive any provision of this
        Agreement. This Agreement constitutes and contains the entire agreement
        between Skyjumper Sports and Amusements Pvt Ltd and me relating to the
        Child's and my use of the Skyjumper Trampoline Park. There are no other
        agreements, oral, written, or implied, with respect to such matters. I
        agree that if any portion of this Agreement is found to be
        unenforceable, the remaining portions shall remain in full force.
      </StyleText>
      <StyleText className="mt-2">
        By signing below, ( either by manual signature or in digital form) I
        represent and warrant that I am the parent, legal guardian, or
        power-of-attorney of the above listed Child(ren) and have the authority
        to execute this Agreement on his/her or their behalf and to act on
        his/her or their behalf. I have read each and every paragraph in this
        document and I and they agree to be bound by the terms stated therein,
        including the release of liability contained therein. I further agree to
        indemnify and hold harmless Skyjumper Sports and Amusement Pvt Ltd from
        any and all claims which are brought by or on behalf of this or these
        minor Child or Children, or any of them, which are in any way connected
        with, arise out of, or result from their use of the Skyjumper Trampoline
        Park. I am 18 years of age or older. I am entering this agreement on
        behalf of myself, my spouse or domestic partner, the Child, and our
        respective and/or collective issue, parents, siblings, heirs, assigns,
        personal representatives, estate(s), and anyone else who can claim by or
        through such person or persons (IN SUMMARY, BY MY SIGNATURE BELOW, I
        ACKNOWLEDGE THAT IF I OR ANY OF MY CHILDREN ARE INJURED IN ANY WAY, THIS
        WAIVER PREVENTS AND PROHIBITS ANY RECOVERY OF MONEY FROM ANY SKYJUMPER
        RELATED ENTITY.
      </StyleText>
    </StyleScrollView>
  );
};

export default ParticipantAgreement;
