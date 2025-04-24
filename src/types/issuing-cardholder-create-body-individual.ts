import {
  External$IssuingCardholderCreateBodyIndividualCardIssuing,
  IssuingCardholderCreateBodyIndividualCardIssuing,
  Schemas$IssuingCardholderCreateBodyIndividualCardIssuing,
} from "./issuing-cardholder-create-body-individual-card-issuing";
import {
  External$IssuingCardholderCreateBodyIndividualDob,
  IssuingCardholderCreateBodyIndividualDob,
  Schemas$IssuingCardholderCreateBodyIndividualDob,
} from "./issuing-cardholder-create-body-individual-dob";
import {
  External$IssuingCardholderCreateBodyIndividualVerification,
  IssuingCardholderCreateBodyIndividualVerification,
  Schemas$IssuingCardholderCreateBodyIndividualVerification,
} from "./issuing-cardholder-create-body-individual-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional information about an `individual` cardholder.
 */
export type IssuingCardholderCreateBodyIndividual = {
  cardIssuing?: IssuingCardholderCreateBodyIndividualCardIssuing | undefined;
  dob?: IssuingCardholderCreateBodyIndividualDob | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  verification?: IssuingCardholderCreateBodyIndividualVerification | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBodyIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyIndividual = {
  card_issuing?:
    | External$IssuingCardholderCreateBodyIndividualCardIssuing
    | undefined;
  dob?: External$IssuingCardholderCreateBodyIndividualDob | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  verification?:
    | External$IssuingCardholderCreateBodyIndividualVerification
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyIndividual
 */
const SchemaIn$IssuingCardholderCreateBodyIndividual: z.ZodType<
  IssuingCardholderCreateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing:
      Schemas$IssuingCardholderCreateBodyIndividualCardIssuing.in.optional(),
    dob: Schemas$IssuingCardholderCreateBodyIndividualDob.in.optional(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    verification:
      Schemas$IssuingCardholderCreateBodyIndividualVerification.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card_issuing: "cardIssuing",
      dob: "dob",
      first_name: "firstName",
      last_name: "lastName",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyIndividual
 */
const SchemaOut$IssuingCardholderCreateBodyIndividual: z.ZodType<
  External$IssuingCardholderCreateBodyIndividual, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyIndividual // the object to be transformed
> = z
  .object({
    cardIssuing:
      Schemas$IssuingCardholderCreateBodyIndividualCardIssuing.out.optional(),
    dob: Schemas$IssuingCardholderCreateBodyIndividualDob.out.optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    verification:
      Schemas$IssuingCardholderCreateBodyIndividualVerification.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardIssuing: "card_issuing",
      dob: "dob",
      firstName: "first_name",
      lastName: "last_name",
      verification: "verification",
    });
  });

export const Schemas$IssuingCardholderCreateBodyIndividual = {
  in: SchemaIn$IssuingCardholderCreateBodyIndividual,
  out: SchemaOut$IssuingCardholderCreateBodyIndividual,
};
