import {
  External$PaymentIntentNextActionKonbiniFamilymart,
  PaymentIntentNextActionKonbiniFamilymart,
  Schemas$PaymentIntentNextActionKonbiniFamilymart,
} from "./payment-intent-next-action-konbini-familymart";
import {
  External$PaymentIntentNextActionKonbiniLawson,
  PaymentIntentNextActionKonbiniLawson,
  Schemas$PaymentIntentNextActionKonbiniLawson,
} from "./payment-intent-next-action-konbini-lawson";
import {
  External$PaymentIntentNextActionKonbiniMinistop,
  PaymentIntentNextActionKonbiniMinistop,
  Schemas$PaymentIntentNextActionKonbiniMinistop,
} from "./payment-intent-next-action-konbini-ministop";
import {
  External$PaymentIntentNextActionKonbiniSeicomart,
  PaymentIntentNextActionKonbiniSeicomart,
  Schemas$PaymentIntentNextActionKonbiniSeicomart,
} from "./payment-intent-next-action-konbini-seicomart";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionKonbiniStores = {
  familymart?: PaymentIntentNextActionKonbiniFamilymart | undefined;
  lawson?: PaymentIntentNextActionKonbiniLawson | undefined;
  ministop?: PaymentIntentNextActionKonbiniMinistop | undefined;
  seicomart?: PaymentIntentNextActionKonbiniSeicomart | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionKonbiniStores without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionKonbiniStores = {
  familymart?: External$PaymentIntentNextActionKonbiniFamilymart | undefined;
  lawson?: External$PaymentIntentNextActionKonbiniLawson | undefined;
  ministop?: External$PaymentIntentNextActionKonbiniMinistop | undefined;
  seicomart?: External$PaymentIntentNextActionKonbiniSeicomart | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionKonbiniStores
 */
const SchemaIn$PaymentIntentNextActionKonbiniStores: z.ZodType<
  PaymentIntentNextActionKonbiniStores, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    familymart: Schemas$PaymentIntentNextActionKonbiniFamilymart.in.optional(),
    lawson: Schemas$PaymentIntentNextActionKonbiniLawson.in.optional(),
    ministop: Schemas$PaymentIntentNextActionKonbiniMinistop.in.optional(),
    seicomart: Schemas$PaymentIntentNextActionKonbiniSeicomart.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      familymart: "familymart",
      lawson: "lawson",
      ministop: "ministop",
      seicomart: "seicomart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionKonbiniStores
 */
const SchemaOut$PaymentIntentNextActionKonbiniStores: z.ZodType<
  External$PaymentIntentNextActionKonbiniStores, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionKonbiniStores // the object to be transformed
> = z
  .object({
    familymart: Schemas$PaymentIntentNextActionKonbiniFamilymart.out.optional(),
    lawson: Schemas$PaymentIntentNextActionKonbiniLawson.out.optional(),
    ministop: Schemas$PaymentIntentNextActionKonbiniMinistop.out.optional(),
    seicomart: Schemas$PaymentIntentNextActionKonbiniSeicomart.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      familymart: "familymart",
      lawson: "lawson",
      ministop: "ministop",
      seicomart: "seicomart",
    });
  });

export const Schemas$PaymentIntentNextActionKonbiniStores = {
  in: SchemaIn$PaymentIntentNextActionKonbiniStores,
  out: SchemaOut$PaymentIntentNextActionKonbiniStores,
};
