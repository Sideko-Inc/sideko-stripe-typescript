import {
  External$IssuingCardholderCardIssuing,
  IssuingCardholderCardIssuing,
  Schemas$IssuingCardholderCardIssuing,
} from "./issuing-cardholder-card-issuing";
import {
  External$IssuingCardholderIndividualDob,
  IssuingCardholderIndividualDob,
  Schemas$IssuingCardholderIndividualDob,
} from "./issuing-cardholder-individual-dob";
import {
  External$IssuingCardholderVerification,
  IssuingCardholderVerification,
  Schemas$IssuingCardholderVerification,
} from "./issuing-cardholder-verification";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderIndividual = {
  cardIssuing?: IssuingCardholderCardIssuing | undefined;
  dob?: IssuingCardholderIndividualDob | undefined;
  /**
   * The first name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
   */
  firstName?: string | null | undefined;
  /**
   * The last name of this cardholder. Required before activating Cards. This field cannot contain any numbers, special characters (except periods, commas, hyphens, spaces and apostrophes) or non-latin letters.
   */
  lastName?: string | null | undefined;
  verification?: IssuingCardholderVerification | undefined;
};

/**
 * @internal
 * IssuingCardholderIndividual without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderIndividual = {
  card_issuing?: External$IssuingCardholderCardIssuing | undefined;
  dob?: External$IssuingCardholderIndividualDob | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  verification?: External$IssuingCardholderVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderIndividual
 */
const SchemaIn$IssuingCardholderIndividual: z.ZodType<
  IssuingCardholderIndividual, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    card_issuing: Schemas$IssuingCardholderCardIssuing.in.optional(),
    dob: Schemas$IssuingCardholderIndividualDob.in.optional(),
    first_name: z.string().nullable().optional(),
    last_name: z.string().nullable().optional(),
    verification: z.lazy(() =>
      Schemas$IssuingCardholderVerification.in.optional(),
    ),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderIndividual
 */
const SchemaOut$IssuingCardholderIndividual: z.ZodType<
  External$IssuingCardholderIndividual, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderIndividual // the object to be transformed
> = z
  .object({
    cardIssuing: Schemas$IssuingCardholderCardIssuing.out.optional(),
    dob: Schemas$IssuingCardholderIndividualDob.out.optional(),
    firstName: z.string().nullable().optional(),
    lastName: z.string().nullable().optional(),
    verification: z.lazy(() =>
      Schemas$IssuingCardholderVerification.out.optional(),
    ),
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

export const Schemas$IssuingCardholderIndividual = {
  in: SchemaIn$IssuingCardholderIndividual,
  out: SchemaOut$IssuingCardholderIndividual,
};
