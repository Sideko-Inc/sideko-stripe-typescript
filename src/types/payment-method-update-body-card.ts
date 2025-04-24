import {
  External$PaymentMethodUpdateBodyCardNetworks,
  PaymentMethodUpdateBodyCardNetworks,
  Schemas$PaymentMethodUpdateBodyCardNetworks,
} from "./payment-method-update-body-card-networks";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * If this is a `card` PaymentMethod, this hash contains the user's card details.
 */
export type PaymentMethodUpdateBodyCard = {
  expMonth?: number | undefined;
  expYear?: number | undefined;
  networks?: PaymentMethodUpdateBodyCardNetworks | undefined;
};

/**
 * @internal
 * PaymentMethodUpdateBodyCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodUpdateBodyCard = {
  exp_month?: number | undefined;
  exp_year?: number | undefined;
  networks?: External$PaymentMethodUpdateBodyCardNetworks | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodUpdateBodyCard
 */
const SchemaIn$PaymentMethodUpdateBodyCard: z.ZodType<
  PaymentMethodUpdateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    exp_month: z.number().int().optional(),
    exp_year: z.number().int().optional(),
    networks: Schemas$PaymentMethodUpdateBodyCardNetworks.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      exp_month: "expMonth",
      exp_year: "expYear",
      networks: "networks",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodUpdateBodyCard
 */
const SchemaOut$PaymentMethodUpdateBodyCard: z.ZodType<
  External$PaymentMethodUpdateBodyCard, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodUpdateBodyCard // the object to be transformed
> = z
  .object({
    expMonth: z.number().int().optional(),
    expYear: z.number().int().optional(),
    networks: Schemas$PaymentMethodUpdateBodyCardNetworks.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expMonth: "exp_month",
      expYear: "exp_year",
      networks: "networks",
    });
  });

export const Schemas$PaymentMethodUpdateBodyCard = {
  in: SchemaIn$PaymentMethodUpdateBodyCard,
  out: SchemaOut$PaymentMethodUpdateBodyCard,
};
