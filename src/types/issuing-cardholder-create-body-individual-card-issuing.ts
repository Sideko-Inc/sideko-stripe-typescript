import {
  External$IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance,
  IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance,
  Schemas$IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance,
} from "./issuing-cardholder-create-body-individual-card-issuing-user-terms-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderCreateBodyIndividualCardIssuing
 */
export type IssuingCardholderCreateBodyIndividualCardIssuing = {
  userTermsAcceptance?:
    | IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance
    | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBodyIndividualCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyIndividualCardIssuing = {
  user_terms_acceptance?:
    | External$IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyIndividualCardIssuing
 */
const SchemaIn$IssuingCardholderCreateBodyIndividualCardIssuing: z.ZodType<
  IssuingCardholderCreateBodyIndividualCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    user_terms_acceptance:
      Schemas$IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      user_terms_acceptance: "userTermsAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyIndividualCardIssuing
 */
const SchemaOut$IssuingCardholderCreateBodyIndividualCardIssuing: z.ZodType<
  External$IssuingCardholderCreateBodyIndividualCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyIndividualCardIssuing // the object to be transformed
> = z
  .object({
    userTermsAcceptance:
      Schemas$IssuingCardholderCreateBodyIndividualCardIssuingUserTermsAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      userTermsAcceptance: "user_terms_acceptance",
    });
  });

export const Schemas$IssuingCardholderCreateBodyIndividualCardIssuing = {
  in: SchemaIn$IssuingCardholderCreateBodyIndividualCardIssuing,
  out: SchemaOut$IssuingCardholderCreateBodyIndividualCardIssuing,
};
