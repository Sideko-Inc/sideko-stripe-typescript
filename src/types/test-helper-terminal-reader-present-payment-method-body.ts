import {
  External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
  Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
  TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent,
} from "./test-helper-terminal-reader-present-payment-method-body-card-present";
import {
  External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
  Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
  TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent,
} from "./test-helper-terminal-reader-present-payment-method-body-interac-present";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TestHelperTerminalReaderPresentPaymentMethodBody
 */
export type TestHelperTerminalReaderPresentPaymentMethodBody = {
  /**
   * Simulated on-reader tip amount.
   */
  amountTip?: number | undefined;
  /**
   * Simulated data for the card_present payment method.
   */
  cardPresent?:
    | TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Simulated data for the interac_present payment method.
   */
  interacPresent?:
    | TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
    | undefined;
  /**
   * Simulated payment type.
   */
  type?: ("card_present" | "interac_present") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent | undefined)
    | (string[] | undefined)
    | (
        | TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
        | undefined
      )
    | (("card_present" | "interac_present") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TestHelperTerminalReaderPresentPaymentMethodBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TestHelperTerminalReaderPresentPaymentMethodBody = {
  amount_tip?: number | undefined;
  card_present?:
    | External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
    | undefined;
  expand?: string[] | undefined;
  interac_present?:
    | External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
    | undefined;
  type?: ("card_present" | "interac_present") | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (
        | External$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent
        | undefined
      )
    | (string[] | undefined)
    | (
        | External$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent
        | undefined
      )
    | (("card_present" | "interac_present") | undefined)
    | External$TestHelperTerminalReaderPresentPaymentMethodBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TestHelperTerminalReaderPresentPaymentMethodBody
 */
const SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBody: z.ZodType<
  TestHelperTerminalReaderPresentPaymentMethodBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tip: z.number().int().optional(),
    card_present:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent.in.optional(),
    expand: z.array(z.string()).optional(),
    interac_present:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent.in.optional(),
    type: z.enum(["card_present", "interac_present"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tip: "amountTip",
      card_present: "cardPresent",
      expand: "expand",
      interac_present: "interacPresent",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TestHelperTerminalReaderPresentPaymentMethodBody
 */
const SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBody: z.ZodType<
  External$TestHelperTerminalReaderPresentPaymentMethodBody, // output type of this zod object
  z.ZodTypeDef,
  TestHelperTerminalReaderPresentPaymentMethodBody // the object to be transformed
> = z
  .object({
    amountTip: z.number().int().optional(),
    cardPresent:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyCardPresent.out.optional(),
    expand: z.array(z.string()).optional(),
    interacPresent:
      Schemas$TestHelperTerminalReaderPresentPaymentMethodBodyInteracPresent.out.optional(),
    type: z.enum(["card_present", "interac_present"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amountTip: "amount_tip",
      cardPresent: "card_present",
      expand: "expand",
      interacPresent: "interac_present",
      type: "type",
    });
  });

export const Schemas$TestHelperTerminalReaderPresentPaymentMethodBody = {
  in: SchemaIn$TestHelperTerminalReaderPresentPaymentMethodBody,
  out: SchemaOut$TestHelperTerminalReaderPresentPaymentMethodBody,
};
